import { createFailedResponse } from "../../util/failedResponse/CreateFailedResponse.js";

export const timesheetCreateValidator = (req, res, next) => {
  const { projectTask, projectName, projectNotes } = req.body;
  if (!validateData(projectTask)) {
    return res
      .status(404)
      .send(
        createFailedResponse(404, "Check your project task and try again!")
      );
  }
  if (!validateData(projectName)) {
    return res
      .status(404)
      .send(
        createFailedResponse(404, "Check your project name and try again!")
      );
  }
  if (!validateData(projectNotes)) {
    return res
      .status(404)
      .send(
        createFailedResponse(404, "Check your project notes and try again!")
      );
  }
  next();
};

const validateData = (data) => {
  if (!data || data.trim() === 0) {
    return false;
  }
  return true;
};
