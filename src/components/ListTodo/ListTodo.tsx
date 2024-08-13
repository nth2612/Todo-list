import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, Chip, IconButton, Modal } from '@mui/material'
import { useState } from 'react'
import { changeNameTodo, decrement, Todo } from '../../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import DoneIcon from '@mui/icons-material/Done'
import { changeStatusTodo } from '../../redux/counterSlice'
import RemoveDoneIcon from '@mui/icons-material/RemoveDone'

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: 'none'
}

const ListTodo = () => {
  const bigStore = useSelector((state: RootState) => state.listTodo)
  const dispatch = useDispatch()
  const listTodos: Todo[] = bigStore.todoList
  const { priority, search, status } = bigStore.filter
  console.log('tao render')
  const [open, setOpen] = useState<boolean>(false)
  const [editText, setEditText] = useState<string>('')
  const [todoIsEditing, setTodoIsEditing] = useState<Todo>({} as Todo)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleChangeTextarea = (event:React.ChangeEvent<HTMLTextAreaElement> ) => {
    setEditText(event.target.value)
  }
  const handleClose = () => setOpen(false)
  const handleOpenAndEdit = (todo: Todo) => {
    setTodoIsEditing(todo)
    setEditText(todo.name)
  }
  const handleStatus = () => {
    dispatch(changeStatusTodo(todoIsEditing.id))
    handleClose()
  }
  const handleNameTodo = () => {
    dispatch(changeNameTodo({ id: todoIsEditing.id, name: editText }))
    handleClose()
  }
  const handleDelete = () => {
    dispatch(decrement(todoIsEditing.id))
    handleClose()
  }
  const getTodoByNameAndStatusAndFilter = (arr: Todo[]) => {
    const lowerSearchString = search.toLowerCase()
    switch (status) {
    case 'Completed':
      return arr.filter(todo => todo.isCompleted === true && todo.name.toLowerCase().includes(lowerSearchString) && priority.includes(todo.prio))
    case 'Todo':
      return arr.filter(todo => todo.isCompleted === false && todo.name.toLowerCase().includes(lowerSearchString) && priority.includes(todo.prio))
    default:
      return arr.filter(todo => todo.name.toLowerCase().includes(lowerSearchString) && priority.includes(todo.prio))
    }
  }
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
      <ul className='flex flex-col-reverse gap-2'>
        {getTodoByNameAndStatusAndFilter(listTodos).length !== 0 ?
          getTodoByNameAndStatusAndFilter(listTodos).map(todo => {
            const getColor = prioritiesList.find(prio => prio.priorityLevel === todo.prio)!
            return (
              <li key={todo.id} onClick={() => {
                handleOpenAndEdit(todo)
                handleOpen()
              }} className='flex flex-row items-center cursor-pointer hover:bg-[#ddd]'>
                <IconButton size='small'>
                  {todo.isCompleted ? <CheckBoxOutlinedIcon/> : <CheckBoxOutlineBlankOutlinedIcon/>}
                </IconButton>
                <span className='flex-1 text-left'>{todo.name}</span>
                <Chip label={todo.prio} sx={{ borderRadius: '4px', color: getColor.priorityColor, border: `0.5px solid ${getColor.priorityColor}`, bgcolor: getColor.priorityBgClr }} />
              </li>
            )
          })
          : <h1 className='text-center'>Không tìm thấy</h1>}
      </ul>
      <Modal
        disableEnforceFocus
        keepMounted
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className='text-center'>Công việc</h2>
          <textarea name="" id="" onChange={handleChangeTextarea} rows={4} className='w-full border outline-none min-h-14 p-2' placeholder='' value={editText} />
          <div className='flex items-start flex-col'>
            {todoIsEditing.isCompleted
              ? <Button size='medium' onClick={handleStatus} startIcon={<RemoveDoneIcon/>}>
                Bỏ đánh dấu hoàn thành
              </Button>

              : <Button size='medium' onClick={handleStatus} startIcon={<DoneIcon/>}>
                Đánh dấu đã hoàn thành
              </Button>}
            <Button size='medium' startIcon={<ModeEditIcon/>} onClick={handleNameTodo}>
              Chỉnh sửa tên công việc
            </Button>
            <Button size='medium' onClick={handleDelete} startIcon={<DeleteIcon/>}>
              Xóa công việc
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ListTodo
