import React, { useState, useEffect } from "react";
import {
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    FormHelperText,
    Box,
    TextField,
    Typography,
} from "@mui/material";
import { useCallback } from "react";
import axios from "axios";

import Utils from "../../utils/utils";
import apiManager from "../../services/api-manger";

let cancelTokenSource = axios.CancelToken.source();

export default function SearchBox({
    id: propsID,
    useKey: propsKey,
    label,
    path,
    labelTop,
    error = "",
    initValue = {},
    styles = {},
    size = "small",
    callBack = () => { },
    ...props
}) {
    const [records, setRecords] = useState([]);
    const [stateValue, setStateValue] = useState("");
    const [stateSelected, setStateSelected] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const searchInRecords = useCallback(async () => {
        try {
            setIsLoading(true);
            cancelTokenSource = axios.CancelToken.source();
            let { data } = await apiManager({
                method: "get",
                path: `${path}search=${stateValue}&per_page=10`,
                header: {
                    cancelToken: cancelTokenSource.token
                }
            });
            setRecords(data?.data)
        } finally {
            setIsLoading(false);
        }
    }, [stateValue]);

    useEffect(() => {
        if (Object.keys(initValue).length) {
            setRecords([initValue]);
            setStateSelected(initValue?.propsID);
        }
    }, [initValue]);

    useEffect(() => {
        searchInRecords();
    }, [searchInRecords]);


    const onChange = (event) => {
        setStateSelected(event.target.value);
        callBack(event.target.value);
    };

    const _id = `select__${Utils.generateId()}`;

    const TextContainer = ({ text }) => (
        <Box sx={{
            px: 2,
            pb: 1,
            textAlign: "center"
        }}>
            <Typography component="small" sx={{ fontSize: "12px", fontWeight: "bold", color: "#ccc" }}>{text}</Typography>
        </Box>
    )

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
                    {labelTop}
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
                    error={Boolean(error !== "")}
                    value={stateSelected}
                    onChange={onChange}
                    sx={{ background: "#fff" }}
                    disableVirtualization
                >
                    <Box sx={{
                        px: 2,
                        pb: 1
                    }}>
                        <TextField label="Search" type="text" value={stateValue} size="small" onChange={(e) => setStateValue(e.target.value)} />
                    </Box>
                    {isLoading && <TextContainer text="...loading" />}
                    <MenuItem sx={{ visibility: "hidden" }} />
                    {records.length > 0 ? records.map((_v, _i) => {
                        return (
                            <MenuItem key={_i} value={_v[propsID]}>
                                {_v[propsKey]}
                            </MenuItem>
                        );
                    }) :
                        <TextContainer text="No Records match your query!" />
                    }
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
