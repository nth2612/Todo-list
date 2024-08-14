import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface Todo {
  id: string,
  name: string,
  prio: string,
  isCompleted: boolean
}

const dataFromLocal = JSON.parse(localStorage.getItem("todo-redux") ?? "[]")

const initValue : {
  filter: {
    search: string,
    status: string,
    priority: string[]
  },
  todoList: Todo[]
} = {
  filter: {
    search: '',
    status: 'All',
    priority: ["Cao", "Trung bình", "Thấp"]
  },
  todoList: dataFromLocal
}

export const counterSlice = createSlice({
  name: 'todo-list',
  initialState: initValue,
  reducers: {
    increment: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload)
    },
    decrement: (state, action: PayloadAction<string>) => {
      const indexDelete = state.todoList.findIndex(todo => todo.id === action.payload)
      state.todoList.splice(indexDelete, 1)
    },
    changeSearchText: (state, action: PayloadAction<string>) => {
      state.filter.search = action.payload
    },
    changeStatusFilter: (state, action: PayloadAction<string>) => {
      state.filter.status = action.payload
    },
    changePrioFilter: (state, action: PayloadAction<string[]>) => {
      if (action.payload.length === 0) {
        state.filter.priority = []
      }
      state.filter.priority = action.payload
    },
    changeStatusTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find(td => td.id === action.payload)
      if (todo) {
        todo.isCompleted = !todo.isCompleted
      }
    },
    changeNameTodo: (state, action:PayloadAction<{ id: string, name: string }>) => {
      const todo = state.todoList.find(td => td.id === action.payload.id)
      if (todo) {
        todo.name = action.payload.name
      }
    }
  }
})

export const { increment, decrement, changeSearchText, changeStatusFilter, changePrioFilter, changeStatusTodo, changeNameTodo } = counterSlice.actions

export default counterSlice.reducer