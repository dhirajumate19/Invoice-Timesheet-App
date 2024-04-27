import express from "express";
import { timesheetCreate, timesheetView } from "./timesheet.controller.js";
import { timesheetCreateValidator } from "./timesheet.validator.js";
const timesheetRouter = express.Router();

timesheetRouter.post(
  "/timesheetcreate",
  timesheetCreateValidator,
  timesheetCreate
);

timesheetRouter.get("/timesheetview", timesheetView);

export default timesheetRouter;
