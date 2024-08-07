import { Box, Chip, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"

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
  console.log("Prio rerender");
  
  const [priorities, setPriorities] = useState<Priority[]>([])
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const newOne = event.target.value as string[]
    const newListPrio: Priority[] = newOne.map(prio => prioritiesList.find(prio2 => prio2.priorityLevel === prio)).filter((prio): prio is Priority => prio !== undefined)
    setPriorities(newListPrio)
  }
  return (
    <Box>
      <span>Độ ưu tiên: </span>
      <Select
        id="filter priority"
        multiple
        displayEmpty
        fullWidth
        size="small"
        value={priorities.map(priority => priority.priorityLevel)}
        onChange={handleChange}
        renderValue={() => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {priorities.map((prio) => (
              <Chip key={prio.id} label={prio.priorityLevel} sx={{ borderRadius: '4px', color: prio.priorityColor, border: `0.5px solid ${prio.priorityColor}`, bgcolor: prio.priorityBgClr }} />
            ))}
          </Box>
        )}
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

