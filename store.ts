import { configureStore } from '@reduxjs/toolkit'
import watchReducer from './features/watchSlice'
import locationReducer from './features/locationSlice'
import programReducer from './features/programSlice'
import startReducer from './features/startSlice'

export const store = configureStore({
  reducer: {
    watch: watchReducer,
    location: locationReducer,
    program: programReducer,
    start: startReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch