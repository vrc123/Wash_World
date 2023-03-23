import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WatchState {
    sec: number,
    min: number,
    washStarted: boolean,
    interval: number,
}

const initialState: WatchState = {
    sec: 0,
    min: 0,
    washStarted: false,
    interval: 0,
}

export const watchSlice = createSlice({
    name: 'watch',
    initialState,
    reducers: {
        setup: (state, action: PayloadAction<number[]>) => {
            state.washStarted = true;
            
            if(action.payload[1] == 0) {
                state.min = action.payload[0] - 1;
                state.sec = 59;
            } else {
                state.min = action.payload[0];
                state.sec = action.payload[1];
            }
        },
        countdownSec: (state) => {
            state.sec -= 1;
        },
        countdownMin: (state) => {
            state.min -= 1;
        },
        saveInterval: (state, action: PayloadAction<any>) => {
            state.interval = action.payload
        },
        changeSec: (state, action: PayloadAction<number>) => {
            state.sec = action.payload
        },
    },
})

export const { setup, countdownSec, countdownMin, saveInterval, changeSec /*changeMin, changeSec, decrementMin, decrementSec, setup, reset*/ } = watchSlice.actions

export default watchSlice.reducer