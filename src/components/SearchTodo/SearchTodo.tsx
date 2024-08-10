import { Box, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { changeSearchText } from "../../redux/counterSlice"

const SearchTodo = () => {
  const [searchText, setSearchText] = useState<string>('')
  const dispatch = useDispatch()
  console.log('Search rerender')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
    dispatch(changeSearchText(event.target.value))
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
