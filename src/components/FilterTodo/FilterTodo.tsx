import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeStatusFilter } from "../../redux/counterSlice"

const PriorityTodo = () => {
  console.log("Filter rerender")
  const dispatch = useDispatch()
  const [statusFilter, setStatusFilter] = useState('All')
  const handleChangeStatus = (event: SelectChangeEvent<string>) => {
    setStatusFilter(event.target.value)
    dispatch(changeStatusFilter(event.target.value))
  }
  return (
    <Box>
      <span>Trạng thái:</span>
      <Select
        id="filter-status"
        value={statusFilter}
        fullWidth
        displayEmpty
        size="small"
        onChange={handleChangeStatus}
      >
        <MenuItem value={"All"}>Tất cả</MenuItem>
        <MenuItem value={"Completed"}>Đã hoàn thành</MenuItem>
        <MenuItem value={"Todo"}>Chưa hoàn thành</MenuItem>
      </Select>
    </Box>
  )
}

export default PriorityTodo