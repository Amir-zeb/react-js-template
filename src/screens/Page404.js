import React from 'react';
import { Container, Skeleton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <>
            <Skeleton sx={{height:{ sm: 450, xs: 250 }}} variant="rectangular" />
            <Container>
                <Typography mt={{ md: "1.8rem", xs: "1.1rem" }} sx={{ fontSize: { md: "1.8rem", xs: "1.1rem" } }}>
                    404 Page not found
                </Typography>
                <Link to="/">Goto Home Page.</Link>
            </Container>
        </>
    );
}

export default Page404;