import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Chip, IconButton, Modal } from '@mui/material'
import { useState } from 'react'

interface RawData {
  id: string,
  nameTodo: string,
  prio: string,
  isCompleted: boolean
}
const testData: RawData[] = [
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
  console.log('tao render')
  const [open, setOpen] = useState<boolean>(false)
  const [editText, setEditText] = useState<string>('')
  const handleOpen = () => {
    setOpen(true)
  }
  const handleChangeTextarea = (event:React.ChangeEvent<HTMLTextAreaElement> ) => {
    setEditText(event.target.value)
  }
  const handleClose = () => setOpen(false)
  const handleOpenAndEdit = (todo: RawData) => {
    setEditText(todo.nameTodo)
  }
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
      <ul className='flex flex-col-reverse gap-2'>
        {testData.map(todo => {
          const getColor = prioritiesList.find(prio => prio.priorityLevel === todo.prio)!
          return (
            <li key={todo.id} onClick={() => {
              handleOpenAndEdit(todo)
              handleOpen()
            }} className='flex flex-row items-center cursor-pointer hover:bg-[#ddd]'>
              <IconButton size='small'>
                {todo.isCompleted ? <CheckBoxOutlinedIcon/> : <CheckBoxOutlineBlankOutlinedIcon/>}
              </IconButton>
              <span className='flex-1 text-left'>{todo.nameTodo}</span>
              <Chip label={todo.prio} sx={{ borderRadius: '4px', color: getColor.priorityColor, border: `0.5px solid ${getColor.priorityColor}`, bgcolor: getColor.priorityBgClr }} />
            </li>
          )
        })}
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
          <textarea name="" id="" onChange={handleChangeTextarea} rows={4} className='w-full border outline-none min-h-14' placeholder='' value={editText} />
          <div className='flex justify-center gap-5'>
            <IconButton size='medium'>
              <ModeEditIcon/>
            </IconButton>
            <IconButton size='medium' onClick={handleClose}>
              <DeleteIcon/>
            </IconButton>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ListTodo
