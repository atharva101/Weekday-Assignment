import { Box, TextField } from "@mui/material";
import MultiSelect from "./MultipleSelect";
import {
  experienceOptions,
  minBasePayOptions,
  remoteOptions,
  techStackOptions,
} from "../../constants";
import { useDispatch } from "react-redux";
import {
  updateCompanyName,
  updateLocation,
  updateRole,
} from "../../store/filterSlice";
import { useState } from "react";

const Header = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  function handleChange(
    option: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setSelectedValue(event.target.value ?? "");
    switch (option) {
      case "Location":
        dispatch(updateLocation(event.target.value ?? ""));
        break;
      case "Company Name":
        dispatch(updateCompanyName(event.target.value ?? ""));
        break;
      case "Role":
        dispatch(updateRole(event.target.value ?? ""));
        break;
      default:
        break;
    }
  }
  return (
    <Box sx={{ margin: "15px" }}>
      <MultiSelect
        multiple={false}
        label="Min Exp"
        options={experienceOptions}
      />
      <TextField
        sx={{ margin: "8px" }}
        label="Company Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("Company Name", e)
        }
      />
      <TextField
        label="Location"
        sx={{ marginTop: "8px" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("Location", e)
        }
      />
      <MultiSelect
        multiple={true}
        label="Remote/on-site"
        options={remoteOptions}
      />
      <MultiSelect
        multiple={true}
        label="Tech Stack"
        options={techStackOptions}
      />
      <TextField
        label="Role"
        sx={{ marginTop: "8px" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("Role", e)
        }
      />
      <MultiSelect
        multiple={false}
        label="Min base pay"
        options={minBasePayOptions}
      />
    </Box>
  );
};

export default Header;
