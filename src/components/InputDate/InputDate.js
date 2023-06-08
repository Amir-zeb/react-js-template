import React from "react";
import { Box, InputLabel, FormHelperText, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Utils from "../../utils/utils";

const InputDate = ({
    labelTop = "",
    label = "",
    styles,
    error = "",
    helperText = "",
    size = "small",
    format = ["year", "month", "day"],
    slotProps = {},
    value: propsValue,
    onChange: propsOnChange,
    ...props
}) => {
    const [stateValue, setStateValue] = React.useState("");
    const value = propsValue !== undefined ? propsValue : stateValue;

    const onChange = (event) => {
        if (propsOnChange) {
            propsOnChange(event);
        } else {
            setStateValue(event.target.value);
        }
    };

    const _id = `myInput__${Utils.generateId()}`;

    const printError = () => {
        if (error !== "") {
            return (
                <FormHelperText sx={{ color: "red", mt: "0 !important" }}>
                    {error}
                </FormHelperText>
            );
        }
    };

    const printHelperText = () => {
        if (helperText !== "") {
            return (
                <FormHelperText
                    sx={{
                        mt: "0 !important",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#6C6A6A",
                        fontWeight: 500,
                    }}
                >
                    {helperText}
                </FormHelperText>
            );
        }
    };

    return (
        <Box sx={styles}>
            {labelTop && (
                <InputLabel
                    htmlFor={_id}
                    sx={{
                        marginBottom: "5px",
                        color: "#000",
                    }}
                >
                    {labelTop}
                </InputLabel>
            )}
            <DatePicker
                label={label}
                views={format}
                slotProps={{
                    textField: {
                        size: "small",
                        fullWidth: true,
                        error: error !== "",
                        ...slotProps
                    },
                }}
                value={value}
                onChange={onChange}
                {...props}
            />
            {printHelperText()}
            {printError()}
        </Box>
    );
};

export default InputDate;
