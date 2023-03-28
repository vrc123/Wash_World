import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface startState {
    duration: string,
    started: boolean,
}

const initialState: startState = {
    duration: "",
    started: false,
}

export const startSlice = createSlice({
    name: 'start',
    initialState,
    reducers: {
        setup: (state, action: PayloadAction<string>) => {
            state.started = true;
            state.duration = action.payload;
        },
    },
})

export const { setup } = startSlice.actions

export default startSlice.reducer