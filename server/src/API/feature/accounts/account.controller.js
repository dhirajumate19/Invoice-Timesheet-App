import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import accountModel from "./account.model.js";
import { createSuccessResponse } from "../../util/successResponse/CreateSuccessResponse.js";
import { createFailedResponse } from "../../util/failedResponse/CreateFailedResponse.js";
import { uuidToIt } from "../../util/comman/uuidToInt.js";
export let account = [];
export const createAccount = async (req, res) => {
  try {
    const { empName, empEmail, empPassword, empAddress } = req.body;

    const dbRequest = new accountModel({
      empName,
      empEmail,
      empId: uuidToIt(uuid()),
      empPassword,
      empAddress,
    });
    const response = await dbRequest.save();
    console.log("response", response);
    return res
      .status(201)
      .send(createSuccessResponse(response, "Account Created"));
  } catch (error) {
    return res
      .status(400)
      .send(
        createFailedResponse(
          400,
          "Something went wrong please try again!" + error
        )
      );
  }
};
export const loginAccount = (req, res) => {
  const { empEmail } = req.body;
  let empToken;
  const dbResponse = accountModel.findOne({ empEmail });
  if (dbResponse) {
    empToken = jwt.sign({ id: "123asd" }, "SECRETEKEY");
  }
  res.send(
    createSuccessResponse({ empEmail, Token: empToken }, "Employee Logged In")
  );
};
