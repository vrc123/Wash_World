import { combineReducers, configureStore } from '@reduxjs/toolkit';

const COUNTDOWN_TIME = 420; // countdown time in seconds (7 minutes)

const START_COUNTDOWN = 'START_COUNTDOWN';
const STOP_COUNTDOWN = 'STOP_COUNTDOWN';
const COUNTDOWN_TICK = 'COUNTDOWN_TICK';

//countdownReducer handles the state of the countdown, with the initialState object and three action creators: startCountdown, stopCountdown, and countdownTick

interface CountdownState {
  running: boolean;
  timeRemaining: number;
}

const initialState: CountdownState = {
  running: false,
  timeRemaining: COUNTDOWN_TIME,
};

export function startCountdown() {
  return { type: START_COUNTDOWN };
}

export function stopCountdown() {
  return { type: STOP_COUNTDOWN };
}

export function countdownTick() {
  return { type: COUNTDOWN_TICK };
}

//It takes in two arguments - the current state and an action object.
//The initialState object defines the initial state of the countdown feature, with running set to false and timeRemaining set to the default countdown time of 420 seconds (7 minutes).
//The switch statement inside the reducer function checks the type of the action passed in and updates the state based on the action type.
function countdownReducer(state = initialState, action: any) {
  switch (action.type) {
    case START_COUNTDOWN:
      return { ...state, running: true };
    case STOP_COUNTDOWN:
      return { ...state, running: false };
    case COUNTDOWN_TICK:
      const newTime = state.timeRemaining - 1;
      return { ...state, timeRemaining: newTime };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  countdown: countdownReducer,
});

//The RootState describes the shape of the root state object of the Redux store, which is defined as the result of calling combineReducers on the rootReducer.
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
