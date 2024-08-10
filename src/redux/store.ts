import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./counterSlice"

export const store = configureStore({
  reducer: {
    listTodo: counterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch