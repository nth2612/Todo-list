import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"

const PriorityTodo = () => {
  const [statusFilter, setStatusFilter] = useState('All')
  const handleChangeStatus = (event: SelectChangeEvent<string>) => {
    setStatusFilter(event.target.value)
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