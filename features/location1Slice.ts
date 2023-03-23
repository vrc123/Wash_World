import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LocationState {
    value: number[]
}

const initialState: LocationState = {
    value: [],
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<number>) => {
            
            const newArray = [...state.value]
            newArray.splice(0, 1, action.payload!)
            
            return {
                ...state,
                value: newArray
            }
        },
    },
})

export const { change } = locationSlice.actions

export default locationSlice.reducer