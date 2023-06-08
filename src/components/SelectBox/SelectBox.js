import React, { useState, useEffect } from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from "@mui/material";
import Utils from "../../utils/utils";

export default function SelectBox({
  labelTop,
  label,
  items = [],
  error = "",
  value: propsValue,
  styles = {},
  size = "small",
  name = "",
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

  const _id = `select__${Utils.generateId()}`

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
          value={value}
          onChange={onChange}
          sx={{
            background:"white"
          }}
        >
          {items.map((_v, _i) => {
            if (_v.label)
              return (
                <MenuItem key={_i} value={_v.value}>
                  {_v.label}
                </MenuItem>
              );
            return (
              <MenuItem key={_i} value={_v}>
                {_v}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {error !== "" && (
        <FormHelperText sx={{ color: "red", mt: "0 !important" }}>
          {error}
        </FormHelperText>
      )}
    </Box>
  );
}
