import mongoose from "mongoose";

const timesheetSchema = mongoose.Schema(
  {
    projectId: { type: String, required: true },
    projectTask: { type: String, required: true },
    projectName: { type: String, required: true },
    projectNotes: { type: String, required: true },
    idActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const timesheetModel = mongoose.model("timesheet", timesheetSchema);
export default timesheetModel;
