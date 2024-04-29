import { TextField } from "@mui/material";

const TaskField = ({ type, value, onChangeHandler, label }) => (
  <TextField
    fullWidth
    label={label}
    type={type}
    variant="outlined"
    required
    value={value}
    onChange={(e) => onChangeHandler(e.target.value)}
  />
);

export default TaskField;
