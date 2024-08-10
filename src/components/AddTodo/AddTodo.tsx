import { Box, Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { increment, Todo } from "../../redux/counterSlice"
import { v4 as uuidv4 } from 'uuid'

const AddTodo = () => {
  console.log('Add render')
  const dispatch = useDispatch()
  const [nameTodo, setNameTodo] = useState('')
  const [prio, setPrio] = useState<string>("Cao")
  const handleChange = (event: SelectChangeEvent) => {
    setPrio(event.target.value)
  }
  const handleChangeNameTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNameTodo(event.target.value)
  }

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: uuidv4(),
      name: nameTodo,
      prio,
      isCompleted: false
    }
    dispatch(increment(newTodo))
  }
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
      <TextField sx={{ }} size="small" value={nameTodo} fullWidth onChange={handleChangeNameTodo} />
      <Select
        id="add-with-prio"
        displayEmpty
        value={prio}
        size="small"
        sx={{ minWidth: '125px' }}
        onChange={handleChange}
      >
        <MenuItem value={"Cao"}>Cao</MenuItem>
        <MenuItem value={"Trung bình"}>Trung bình</MenuItem>
        <MenuItem value={"Thấp"}>Thấp</MenuItem>
      </Select>
      <Button variant="contained" sx={{ flex: 1 }} onClick={handleAddTodo} >Thêm công việc</Button>
    </Box>
  )
}

export default AddTodo
