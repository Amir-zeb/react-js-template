import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

export default function MyPagination({ count = 1, ...props }) {
    return (
        <Stack justifyContent="center" alignItems="center" my={2}>
            <Pagination count={count} color="primary" {...props} />
        </Stack>
    );
}