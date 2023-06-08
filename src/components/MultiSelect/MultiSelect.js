import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Box,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import Utils from "../../utils/utils";

export default function MultiSelect({
  labelTop,
  label,
  items = [],
  error = "",
  styles = {},
  size = "small",
  name = "",
  helperText,
  value: propsValue = [],
  onChange: propsOnChange,
  ...props
}) {
  const [stateValue, setStateValue] = React.useState("");
  const value = propsValue !== undefined ? propsValue : stateValue;

  const onChange = (event) => {
    if (propsOnChange) {
      propsOnChange(event);
    } else {
      setStateValue(event.target.value);
    }
  };

  const _id = `select__${Utils.generateId()}`;

  return (
    <Box sx={styles}>
      {labelTop && (
        <InputLabel
          id={_id}
          sx={{
            marginBottom: "5px",
            color: "#000",
          }}
        >
          labelTop
        </InputLabel>
      )}
      <FormControl sx={{ minWidth: "150px" }} {...props} size={size} fullWidth>
        {label && (
          <InputLabel id={_id} sx={{ backgroundColor: "#fff" }}>
            {label}
          </InputLabel>
        )}
        <Select
          id={_id}
          name={name}
          error={Boolean(error !== "")}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.map(x => x.label).join(", ")}
          value={value}
          onChange={onChange}
          multiple
        >
          {items.map((item, i) => (
            <MenuItem key={i} value={item}>
              <Checkbox checked={value.findIndex(x=>x?.value===item?.value)>=0} />
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error !== "" && (
        <FormHelperText sx={{ color: "red", mt: "0 !important" }}>
          {error}
        </FormHelperText>
      )}
      {helperText !== "" && error === "" && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </Box>
  );
}
