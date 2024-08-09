import AddTodo from './components/AddTodo/AddTodo'
import FilterTodo from './components/FilterTodo/FilterTodo'
import ListTodo from './components/ListTodo/ListTodo'
import PriorityTodo from './components/PriorityTodo/PriorityTodo'
import SearchTodo from './components/SearchTodo/SearchTodo'
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementWithPayload } from './redux/counterSlice'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='max-w-full mx-auto bg-white h-screen p-5 flex flex-col gap-3'>
      {/* <h1 className='text-center text-3xl font-medium mb-5'>Todo-List Redux</h1>
      <SearchTodo/>
      <FilterTodo/>
      <PriorityTodo/>
      <h1 className='text-center'>Danh sách công việc</h1>
      <ListTodo/>
      <AddTodo/> */}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())} >Tang</button>
      <button onClick={() => dispatch(decrement())} >Giam</button>
      <button onClick={() => dispatch(incrementWithPayload(100))} >Tang khac biet</button>
    </div>
  )
}

export default App
