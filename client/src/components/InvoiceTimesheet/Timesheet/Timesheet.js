import { Button, Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import timesheetStyle from "./Timesheet.module.css";
import Footer from "./Footer/Footer";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ViewTimesheet from "./Footer/ViewTimesheet";
let data = [];
const Timesheet = () => {
  const [createButtonClicked, setCreateButtonClicked] = useState(false);
  const [viewButtonClicked, setViewButtonClicked] = useState(false);

  const [onTask, setTask] = useState("");
  const [onProjectName, setProjectName] = useState("");
  const [onTimeSpent, setTimeSpent] = useState("");
  const [date, setDate] = useState("");
  const [onNotes, setNotes] = useState("");

  const onCreate = () => {
    setCreateButtonClicked(true);
  };
  const onView = () => {
    setViewButtonClicked(true);
  };
  const onSubmitData = (e) => {
    e.preventDefault();

    console.log("task", onTask);
  };
  const onNotesChange = (e) => {
    setNotes(e.target.value);
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

  const onHandleChangeDate = (e) => {
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
                <TextField
                  fullWidth
                  label="Task"
                  variant="outlined"
                  required
                  onChange={onTaskChange}
                />
              </Grid>
              <Grid item xs={2} style={{ padding: "5px" }}>
                <TextField
                  fullWidth
                  label="Project Name"
                  variant="outlined"
                  required
                  onChange={onProjectNameChange}
                />
              </Grid>
              <Grid item xs={2} style={{ padding: "5px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    onChange={onHandleChangeDate}
                    renderInpu={(param) => <TextField {...param} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={2} style={{ padding: "5px" }}>
                <TextField
                  fullWidth
                  type="Time"
                  label="Time Spent"
                  variant="outlined"
                  required
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ step: undefined }}
                  onChange={onTimeSpentChange}
                />
              </Grid>
              <Grid item xs style={{ padding: "5px" }}>
                <TextField
                  fullWidth
                  label="Notes"
                  variant="outlined"
                  multiline
                  rows={1}
                  onChange={onNotesChange}
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
      {viewButtonClicked && <ViewTimesheet />}
      <div className={timesheetStyle.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Timesheet;
