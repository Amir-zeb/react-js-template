import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ConfirmationModal = ({ title, open, children,hideFooter=false, handleClose, callBack = () => { } }) => {
    return (
        <ModalWrapper title={title} open={open} handleClose={handleClose}>
            <Box>
                {!!children ? children :
                    <Box p={2}>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                            Are You sure?
                        </Typography>
                        <Typography variant="span" sx={{ textAlign: "center" }}>
                            This action cannot be undone.
                        </Typography>
                    </Box>
                }
                {!hideFooter &&<Stack direction="row" justifyContent="center" gap={2} mt={2}>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            color: "white",
                        }}
                        onClick={callBack}
                    >
                        Yes
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleClose()}
                    >
                        No
                    </Button>
                </Stack>}
            </Box>
        </ModalWrapper>
    );
};

export default ConfirmationModal;
