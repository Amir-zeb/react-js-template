import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  CircularProgress,
  TableFooter,
} from "@mui/material";

function TableWrapper({
  tableStyle,
  containerStyle,
  spanTd,
  message,
  isLoading,
  isContent,
  children,
  thContent,
  pagination,
  ...props
}) {
  return (
    <TableContainer sx={containerStyle}>
      <Table
        sx={[
          tableStyle,
          {
            "& .MuiTableCell-root": {
              paddingTop: "10px",
              paddingBottom: "10px",
              border: 1,
              borderColor: "lightgray",
            },
          },
        ]}
        {...props}
      >
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                padding: { sm: "15px !important", xs: "10px !important" },
                fontWeight: "bold",
              },
            }}
          >
            {thContent}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={spanTd} align="center">
                <CircularProgress size={22} />
              </TableCell>
            </TableRow>
          ) : isContent ? ( 
            children
          ) : (
            <TableRow>
              <TableCell colSpan={spanTd} align="center">
                <Typography variant="caption1">
                  {!!message ? message : "No Records Found"}
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>{pagination}</TableFooter>
      </Table>
    </TableContainer>
  );
}
TableWrapper.defaultProps = {
  tableStyle: {},
  spanTd: 1,
  message: null,
  isContent: false,
  isLoading: false,
};
export default TableWrapper;