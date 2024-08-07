import { Box, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

const SearchTodo = () => {
  console.log('Search rerender');
  
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Bạn muốn tìm gì"
        variant="outlined"
        size="small"
        fullWidth
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
