import AddTodo from './components/AddTodo/AddTodo'
import FilterTodo from './components/FilterTodo/FilterTodo'
import ListTodo from './components/ListTodo/ListTodo'
import PriorityTodo from './components/PriorityTodo/PriorityTodo'
import SearchTodo from './components/SearchTodo/SearchTodo'

function App() {
  return (
    <div className='max-w-full mx-auto bg-slate-400 h-screen'>
      <h1 className='text-center text-3xl font-medium pt-5'>Todo-List Redux</h1>
      <SearchTodo/>
      <FilterTodo/>
      <PriorityTodo/>
      <ListTodo/>
      <AddTodo/>
    </div>
  )
}

export default App
