import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Chip, IconButton } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

const testData = [
  {
    id: "1",
    nameTodo: "hihihi1",
    prio: "Cao",
    isCompleted: false
  },
  {
    id: "2",
    nameTodo: "hihihi3",
    prio: "Thấp",
    isCompleted: false
  },
  {
    id: "3",
    nameTodo: "hihihi5",
    prio: "Cao",
    isCompleted: true
  },
  {
    id: "4",
    nameTodo: "hihihi2",
    prio: "Trung bình",
    isCompleted: false
  },
  {
    id: "5",
    nameTodo: "hihihi4",
    prio: "Cao",
    isCompleted: false
  }
]

const prioritiesList = [
  {
    id: 1,
    priorityLevel: "Cao",
    priorityColor: "red",
    priorityBgClr: "#fcdede"
  },
  {
    id: 2,
    priorityLevel: "Trung bình",
    priorityColor: "yellow",
    priorityBgClr: "#949494"
  },
  {
    id: 3,
    priorityLevel: "Thấp",
    priorityColor: "blue",
    priorityBgClr: "#d9d9ff"
  }
]

const ListTodo = () => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
      <ul>
        {testData.map(todo => {
          const getColor = prioritiesList.find(prio => prio.priorityLevel === todo.prio)!
          return (
            <li key={todo.id} className='shadow flex flex-row items-center'>
              <IconButton size='small'>
                {todo.isCompleted ? <CheckBoxOutlinedIcon/> : <CheckBoxOutlineBlankOutlinedIcon/>}
              </IconButton>
              <span className='flex-1 text-left'>{todo.nameTodo}</span>
              <Chip label={todo.prio} sx={{ borderRadius: '4px', color: getColor.priorityColor, border: `0.5px solid ${getColor.priorityColor}`, bgcolor: getColor.priorityBgClr }} />
              {/* <IconButton size='small'>
                <ModeEditIcon/>
              </IconButton>
              <IconButton size='small'>
                <DeleteIcon/>
              </IconButton> */}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListTodo
