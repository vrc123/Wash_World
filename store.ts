import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './features/watchSlice'
import locationReducer from './features/location1Slice'

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    location: locationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch