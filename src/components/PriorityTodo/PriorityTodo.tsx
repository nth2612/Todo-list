import { Box, Chip, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { changePrioFilter } from "../../redux/counterSlice"
import type { RootState } from "../../redux/store"

export interface Priority {
  id: number,
  priorityLevel: string,
  priorityColor: string,
  priorityBgClr: string
}

const prioritiesList: Priority[] = [
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

const FilterTodo = () => {
  console.log("Prio rerender")
  const priolist: string[] = useSelector((state: RootState) => state.listTodo.filter.priority)
  const dispatch = useDispatch()
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const newOne = event.target.value as string[]
    dispatch(changePrioFilter(newOne))
  }
  return (
    <Box>
      <span>Độ ưu tiên: </span>
      <Select
        id="filter-priority"
        multiple
        displayEmpty
        fullWidth
        size="small"
        value={priolist}
        onChange={handleChange}
        renderValue={(selected) => {
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {selected.map(prio => {
                const wholePrio = prioritiesList.find(pri => pri.priorityLevel === prio)!
                return <Chip key={wholePrio.id} label={wholePrio.priorityLevel} sx={{ borderRadius: '4px', color: wholePrio.priorityColor, border: `0.5px solid ${wholePrio.priorityColor}`, bgcolor: wholePrio.priorityBgClr }} />
              })}
            </Box>
          )
        }}
      >
        {prioritiesList.map((priority) => (
          <MenuItem
            key={priority.id}
            value={priority.priorityLevel}
          >
            {priority.priorityLevel}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}
export default FilterTodo

