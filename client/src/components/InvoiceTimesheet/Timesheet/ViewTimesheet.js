import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ViewTimesheet = ({ task, projectName, date, timespent, notes }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Timesheet
      </Typography>
      <TableContainer component={Paper}>
        <TableHead aria-label="simple table">
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time Spent</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{task}</TableCell>
            <TableCell>{projectName}</TableCell>
            <TableCell>{date.toDateString()}</TableCell>
            <TableCell>{timespent}</TableCell>
            <TableCell>{notes}</TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </div>
  );
};
export default ViewTimesheet;
