import { Button, Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import timesheetStyle from "./Timesheet.module.css";
import Footer from "../../Footer/Footer";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ViewTimesheet from "./ViewTimesheet";
import TaskField from "../../../utils/comman/TaskFields";
let data = [];
const Timesheet = () => {
  const [createButtonClicked, setCreateButtonClicked] = useState(false);
  const [viewButtonClicked, setViewButtonClicked] = useState(false);

  const [task, setTask] = useState("");
  const [projectName, setProjectName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const onCreate = () => {
    setCreateButtonClicked(true);
  };
  const onView = () => {
    setViewButtonClicked(true);
  };
  const onSubmitData = (e) => {
    e.preventDefault();

    console.log("task", task);
  };
  const onNotesChange = (data) => {
    console.log("dafr", data);
    setNotes(data);
  };
  const onProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };
  const onTaskChange = (e) => {
    setTask(e.target.value);
  };
  const onTimeSpentChange = (e) => {
    setTimeSpent(e.target.value);
  };

  const onDateChange = (e) => {
    setDate(e.$d);
  };
  return (
    <div>
      <div className={timesheetStyle.buttonContainer}>
        <Button variant="contained" onClick={onCreate}>
          Create Timesheet
        </Button>
        <Button variant="contained" onClick={onView}>
          View Timesheet
        </Button>
      </div>
      <section>
        {createButtonClicked && (
          <form
            className={timesheetStyle.formContainer}
            onSubmit={onSubmitData}
          >
            <Grid
              container
              spacing={0}
              justifyContent={"center"}
              style={{ marginTop: "20px" }}
            >
              <Grid item xs={2} style={{ padding: "5px" }}>
                <TaskField
                  value={task}
                  onChangeHandler={setTask}
                  label={"Task"}
                />
              </Grid>
              <Grid item xs={2} style={{ padding: "5px" }}>
                <TaskField
                  value={projectName}
                  onChangeHandler={setProjectName}
                  label={"Project Name"}
                />
              </Grid>
              <Grid item xs={2} style={{ padding: "5px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    onChange={onDateChange}
                    renderInpu={(param) => <TextField {...param} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={2} style={{ padding: "5px" }}>
                <TaskField
                  type={"time"}
                  value={timeSpent}
                  onChangeHandler={setTimeSpent}
                  label={"Time Spent"}
                />
              </Grid>
              <Grid item xs style={{ padding: "5px" }}>
                <TaskField
                  value={notes}
                  onChangeHandler={onNotesChange}
                  label={"Notes"}
                />
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                style={{ marginTop: "20px" }}
              >
                <Grid item xs={3} style={{ padding: "10px" }}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </section>
      {viewButtonClicked && (
        <ViewTimesheet
          task={task}
          projectName={projectName}
          date={date}
          timeSpent={timeSpent}
          notes={notes}
        />
      )}
    </div>
  );
};
export default Timesheet;
