import React, { useEffect, useState } from 'react';
import { Box, Button, Fade, IconButton, Slide, Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useDispatch } from 'react-redux';

import { onBoardSteps } from './data';
import { handleOnBoardUI } from '../../store/reducer';

function OnBoardUi() {
    const [steps, setSteps] = useState(0);
    const prevStepsRef = React.useRef(steps);
    const dispatch = useDispatch();

    useEffect(() => {
        prevStepsRef.current = steps;
    }, [steps]);

    const skipOnBoardUi = () => {
        localStorage.setItem("@EVENTSIFY_ONBOARD_UI", true);
        dispatch(handleOnBoardUI(false));
    }

    const nextStep = () => {
        setSteps(prev => prev + 1);
    }

    const prevStep = () => {
        setSteps(prev => prev - 1);
    }

    return (
        <Fade in={true}>
            <Box component="div" sx={styles.onBoardContainer(onBoardSteps[steps].color)}>
                <Box sx={styles.stage}>
                    <Item data={onBoardSteps[steps]} direction={prevStepsRef.current > steps ? "right" : "left"} key={steps} />
                </Box>
                <Box sx={styles.dots}>
                    <Stack
                        direction="row"

                    >
                        {Array(onBoardSteps.length).fill("").map((_, index) => {
                            return (
                                <IconButton key={index}
                                    onClick={() => setSteps(index)}
                                >
                                    <Brightness1Icon sx={{fontSize:10,color:steps===index?"#fff":"#ddd"}} />
                                </IconButton>
                            )
                        })}
                    </Stack>
                </Box>
                <Button                
                    onClick={skipOnBoardUi}
                    sx={styles.skip}
                >
                    <Box component="span" color="#333">
                        {onBoardSteps.length - 1 === steps ? "Done" : "Skip"}
                    </Box>
                </Button>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={styles.btnContainer}
                >
                    <IconButton
                        onClick={prevStep}
                        disabled={steps === 0}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton
                        disabled={onBoardSteps.length - 1 === steps}
                        onClick={nextStep}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Fade>
    );
}

const Item = ({ data, direction }) => {
    const [afterSomeTime, setAfterSomeTime] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAfterSomeTime(true);
        }, 800);
    }, []);

    return (
        <Box component={Slide} in={true} direction={direction} timeout={800}>
            <Box sx={styles.card}>
                <img src={data.imageUrl} width="100%" alt="" />
                <Box component={Fade} in={afterSomeTime} direction={direction} timeout={200}>
                    <Box textAlign="center" maxWidth="80%" margin="auto">
                        {data.title && <Typography sx={{ fontSize: 22, fontWeight: 600 }} children={data.title} />}
                        {data.description && <Typography sx={{ fontSize: 14, fontWeight: 300 }} children={data.description} />}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OnBoardUi;

const styles = {
    onBoardContainer: (color) => ({
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: color,
        zIndex: 9999,
        overFlow: "hidden",
    }),
    stage: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        padding: "0 15px",
        minHeight: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        overflow: "hidden",
    },
    dots: {
        position: "absolute",
        bottom: 25,
        left: "50%",
        transform: "translateX(-50%)",
    },
    card: {
        width: "100%",
        maxWidth: "650px",
        minHeight: "350px",
    },
    skip: {
        position: "fixed",
        left: 25,
        bottom: 25,
    },
    btnContainer: {
        position: "fixed",
        right: 25,
        bottom: 25,
    }

}