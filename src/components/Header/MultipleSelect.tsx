//@ts-ignore
import React, { useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Stack,
  Chip,
  SelectChangeEvent,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import {
  updateIsRemote,
  updateMinBasePay,
  updateMinExperience,
  updateTechStack,
} from "../../store/filterSlice";

export default function MultiSelect({ multiple, label, options }: {multiple: boolean, label:string,options:string[] | number[] }) {
    const [selectedNames, setSelectedNames] = useState<string[]>([]); 
    const dispatch = useDispatch();
  function handleChange(option: string, event?:  SelectChangeEvent<any>) {
   setSelectedNames(event?.target.value ?? [])
    
    switch (option) {
      case "Min Exp":
      dispatch(updateMinExperience(event?.target.value ?? ""));
        break;
      case "Remote/on-site":
        dispatch(updateIsRemote(event?.target.value ?? ""));
        break;
      case "Tech Stack":
        dispatch(updateTechStack(event?.target.value ?? ""));
        break;
      case "Min base pay":
        dispatch(updateMinBasePay(event?.target.value ?? ""));
        break;
      default:
        break;
    }
  }
  return (
    <FormControl sx={{ m: 1, width: "max-content", minWidth: "200px" }}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple={multiple}
        value={selectedNames}
        onChange={(e) => handleChange(label, e)}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (
          <Stack gap={1} direction="row" flexWrap="wrap">
            {multiple
              ? selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={() => {
                      setSelectedNames(
                        selectedNames.filter((item) => item !== value)
                      );                       
                      handleChange(label);
                      
                    }}
                    
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()
                        }
                      />
                    }
                  />
                ))
              : selected}
          </Stack>
        )}
      >
        {options.map((name: string | number) => (
          <MenuItem
            key={name}
            value={name}
            sx={{ justifyContent: "space-between" }}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
