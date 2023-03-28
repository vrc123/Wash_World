import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProgramState {
    value: number
}

const initialState: ProgramState = {
    value: 0,
}

export const programSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const { change } = programSlice.actions

export default programSlice.reducer