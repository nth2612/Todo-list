import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface CounterState {
  value: number
}

const initValue: CounterState = {
  value: 10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initValue,
  reducers: {
    increment: (state) => {
      state.value += 2
    },
    decrement: (state) => {
      state.value -= 3
    },
    incrementWithPayload: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementWithPayload } = counterSlice.actions

export default counterSlice.reducer