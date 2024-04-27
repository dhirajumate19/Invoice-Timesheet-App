import { v4 as uuid } from "uuid";
import { createFailedResponse } from "../../util/failedResponse/CreateFailedResponse.js";
import { createSuccessResponse } from "../../util/successResponse/CreateSuccessResponse.js";
import timesheetModel from "./timesheet.model.js";
export const timesheetCreate = async (req, res) => {
  try {
    const { projectTask, projectName, projectNotes } = req.body;
    const projectId = uuidToIt(uuid());
    const dbRequest = new timesheetModel({
      projectId,
      projectTask,
      projectName,
      projectNotes,
    });
    const resposne = await dbRequest.save();
    console.log(resposne);
    return res
      .status(201)
      .send(createSuccessResponse({ response: resposne }, "Record Created"));
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send(
        createFailedResponse(400, "Something went wrong please try again!")
      );
  }
};

const uuidToIt = (data) => {
  const id = parseInt(data, 10);
  let Id;
  if (!Number.isNaN(id)) {
    // Handle valid integer
    Id = id.toFixed();
    return (Id = Math.floor(Math.random() * 1000).toFixed());
  } else {
    // Handle case where `uuid()` did not generate a valid integer
    console.error(
      "uuid() did not generate a valid UUID. Generating fallback ID..."
    );
    // Generate a fallback ID using a different method, for example:
  }
};
export const timesheetView = async (req, res) => {
  try {
    const timesheetRecord = await timesheetModel.find();
    res
      .status(200)
      .send(createSuccessResponse({ Record: timesheetRecord }, "Record Fecth"));
  } catch (error) {
    return res
      .status(400)
      .send(
        createFailedResponse(400, "Something went wrong please try again!")
      );
  }
};
