import { Box, Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { useState } from "react"

const AddTodo = () => {
  const [prio, setPrio] = useState<string>("Cao")
  const handleChange = (event: SelectChangeEvent) => {
    setPrio(event.target.value)
  }
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
      <TextField sx={{ }} size="small" fullWidth />
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
      <Button variant="contained" sx={{ flex: 1 }} >Thêm công việc</Button>
    </Box>
  )
}

export default AddTodo
