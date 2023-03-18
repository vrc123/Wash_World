import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countdownTick } from './features/countdown';
import { RootState } from '../store';

//It uses the React hooks useSelector and useDispatch from the react-redux package to access and update the Redux store.

export function Countdown() {
  const dispatch = useDispatch();
  const timeRemaining = useSelector((state: RootState) => state.countdown.timeRemaining);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (timeRemaining > 0) {
      intervalId = setInterval(() => {
        dispatch(countdownTick());
      }, 1000);
    }

    if (timeRemaining <= 0) {
      clearInterval(intervalId!);
      intervalId = null;
    }

    return () => {
      clearInterval(intervalId!);
    };
  }, [timeRemaining, dispatch]);

  return (
    <div>
      <h2>Countdown: {timeRemaining}</h2>
    </div>
  );
}
