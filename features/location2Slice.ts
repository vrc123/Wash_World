import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LocationState {
    value: number
}

const initialState: LocationState = {
    value: 0,
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const { change } = locationSlice.actions

export default locationSlice.reducer