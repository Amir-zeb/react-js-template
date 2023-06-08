import React from "react";
import { Box, Stack } from "@mui/material";
import { comingSoon } from "../../assets";

const ComingSoon = () => {
    return (
        <Box
            sx={{
                p: 4,
            }}
        >
            <Stack alignItems="center">
                <Box maxWidth="600px">
                    <img src={comingSoon} width="100%" alt="coming-soon.jpg" />
                </Box>
            </Stack>
        </Box>
    );
};
export default ComingSoon;
