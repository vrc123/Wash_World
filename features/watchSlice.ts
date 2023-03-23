import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

/*
export interface CountdownState {
    value: {
        min: number,
        sec: number,
        washStarted: boolean,
    },
}

const initialState: CountdownState = {
    value: {
        min: 0,
        sec: 0,
        washStarted: false,
    },
}
*/

export interface WatchState {
    value: number,
}

const initialState: WatchState = {
    value: 0
}

export const watchSlice = createSlice({
    name: 'watch',
    initialState,
    reducers: {
        setup: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        countdown: (state) => {
            state.value -= 1;
        },
        
        /*
        setup: (state, action: PayloadAction<number[]>) => {
            state.value.min = action.payload[0];
            state.value.sec = action.payload[1];
            state.value.washStarted = true;
        },
        decrementSec: (state) => {
            state.value.sec -= 1
        },



        changeMin: (state, action: PayloadAction<number>) => {
            state.value.min = action.payload
        },
                changeSec: (state, action: PayloadAction<number>) => {
            state.value.sec = action.payload
        },
        decrementMin: (state) => {
            state.value.min -= 1
        },
        reset: (state) => { 
            state.value.washStarted = false
        } 
        */
    },
})

export const { setup, countdown /*changeMin, changeSec, decrementMin, decrementSec, setup, reset*/ } = watchSlice.actions

export default watchSlice.reducer