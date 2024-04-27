import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ViewTimesheet = ({ viewTimesheet }) => {
  console.log("viewTimesheet", viewTimesheet);
  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableCell>Task</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Feature Implement in UI</TableCell>
        </TableRow>
      </TableBody>
    </TableContainer>
  );
};
export default ViewTimesheet;
