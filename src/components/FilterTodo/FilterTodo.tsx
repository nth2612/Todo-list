import { Box, Chip, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"

interface Priority {
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
    priorityBgClr: "something"
  },
  {
    id: 2,
    priorityLevel: "Trung bình",
    priorityColor: "yellow",
    priorityBgClr: "something"
  },
  {
    id: 3,
    priorityLevel: "Thấp",
    priorityColor: "blue",
    priorityBgClr: "something"
  }
]

const FilterTodo = () => {
  const [priorities, setPriorities] = useState<Priority[]>([])
  console.log(priorities);
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const newOne = event.target.value as string[]
    const newListPrio: Priority[] = newOne.map(prio => prioritiesList.find(prio2 => prio2.priorityLevel === prio))
    setPriorities(newListPrio!)
  }
  return (
    <Box>
      <Select
        id="filter priority"
        multiple
        displayEmpty
        fullWidth
        size="small"
        value={priorities.map(priority => priority.priorityLevel)}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box onClick={() => console.log("Clicked")} sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} sx={{ borderRadius: '4px' }} />
            ))}
          </Box>
        )}
      >
        {prioritiesList.map((priority) => (
          <MenuItem
            key={priority.id}
            value={priority.priorityLevel}
            sx={{
              color: priority.priorityColor
            }}
          >
            {priority.priorityLevel}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default FilterTodo
