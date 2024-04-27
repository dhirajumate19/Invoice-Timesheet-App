import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import { createSuccessResponse } from "../../util/successResponse/CreateSuccessResponse.js";
export let account = [];
export const createAccount = (req, res) => {
  const { empName, empEmail, empPassword, empAddress } = req.body;
  const accDetails = { empName, empId: uuid(), empEmail, empPassword };
  const { building, flatNo, society } = empAddress;
  const newAccount = {
    ...accDetails,
    empAddress: { building, flatNo, society },
  };
  account.push(newAccount);

  res.status(201).send(createSuccessResponse(newAccount, "Account Created"));
};
export const loginAccount = (req, res) => {
  const { empEmail } = req.body;
  const empToken = jwt.sign({ id: "123asd" }, "SECRETEKEY");
  res.send(
    createSuccessResponse({ empEmail, Token: empToken }, "Employee Logged In")
  );
};
