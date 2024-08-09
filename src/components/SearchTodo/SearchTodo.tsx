import { Box, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, useState } from "react";

const SearchTodo = () => {
  const [searchText, setSearchText] = useState<string>('')
  console.log('Search rerender')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Bạn muốn tìm gì"
        variant="outlined"
        size="small"
        fullWidth
        value={searchText}
        onChange={handleChange}
        sx={{ bgcolor: 'white' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon/>
            </InputAdornment>)
        }} />
    </Box>
  )
}

export default SearchTodo
