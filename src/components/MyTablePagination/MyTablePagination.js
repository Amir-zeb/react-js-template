import React from "react";
import { Box, TablePagination, TableRow, Pagination } from "@mui/material";

const TablePagination = ({
  onChangePage = (value) => { },
  onChangeRowsPerPage,
  rowsPerPage,
  page,
  total=10,
  perPage=10,
  setPage = (value) => { },
}) => {
  const [totalPages, setTotalPages] = React.useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    let count = Math.floor((total) / (perPage));
    setTotalPages(count===0?1:count);
  }, [total]);

  const handlePagination = (event, value) => {
    setPage(value);
    onChangePage(event,value);
  };

  function TablePaginationActions(props) {
    return (
      <Box sx={{ flexShrink: 0, m: 1 }}>
        <Pagination
          count={totalPages||0}
          page={page}
          onChange={handlePagination}
          variant="outlined"
          shape="rounded"
          dir="ltr"
        />
      </Box>
    );
  }

  return (
    <TableRow>
      <TablePagination
        rowsPerPageOptions={[25, 50, 75, 100]}
        count={totalPages||0}
        sx={{
          "& .MuiTablePagination-toolbar": {
            // flexDirection: { sm: "row-reverse" },
          },
        }}
        dir="rtl"
        rowsPerPage={rowsPerPage}
        page={page-1}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
        }}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </TableRow>
  );
};

export default TablePagination;
