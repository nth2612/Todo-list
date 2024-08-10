import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface Todo {
  id: string,
  name: string,
  prio: string,
  isCompleted: boolean
}

const initValue = {
  filter: {
    search: '',
    status: 'All',
    priority: []
  },
  todoList: [
    {
      id: 'abncn',
      name: "Quét nhà",
      prio: "Thấp",
      isCompleted: false
    },
    {
      id: 'abncn2',
      name: "Lau nhà",
      prio: "Trung bình",
      isCompleted: false
    },
    {
      id: 'abncn3',
      name: "Rửa bát",
      prio: "Cao",
      isCompleted: false
    },
    {
      id: 'abncn4',
      name: "Uống nước",
      prio: "Trung bình",
      isCompleted: true
    }
  ]
}

export const counterSlice = createSlice({
  name: 'todo-list',
  initialState: initValue,
  reducers: {
    increment: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload)
    },
    decrement: (state, action: PayloadAction<string>) => {
      const indexDelete = state.todoList.findIndex(employ => employ.id === action.payload)
      state.todoList.splice(indexDelete, 1)
    },
    changeSearchText: (state, action: PayloadAction<string>) => {
      state.filter.search = action.payload
    },
    changeStatusFilter: (state, action: PayloadAction<string>) => {
      state.filter.status = action.payload
    }
  }
})

export const { increment, decrement, changeSearchText, changeStatusFilter } = counterSlice.actions

export default counterSlice.reducer