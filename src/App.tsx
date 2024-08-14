import { useEffect } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import FilterTodo from './components/FilterTodo/FilterTodo'
import ListTodo from './components/ListTodo/ListTodo'
import PriorityTodo from './components/PriorityTodo/PriorityTodo'
import SearchTodo from './components/SearchTodo/SearchTodo'

function App() {
  useEffect(() => {
    if (localStorage.getItem("todo-redux") == null) {
      localStorage.setItem("todo-redux", JSON.stringify([]))
    }
  }, [])
  return (
    <div className='max-w-screen-sm mx-auto bg-white h-screen p-5 flex flex-col gap-3'>
      <h1 className='text-center text-3xl font-medium mb-5'>Todo-List Redux</h1>
      <SearchTodo/>
      <FilterTodo/>
      <PriorityTodo/>
      <h1 className='text-center'>Danh sách công việc</h1>
      <ListTodo/>
      <AddTodo/>
    </div>
  )
}

export default App
