import { createFailedResponse } from "../../util/failedResponse/CreateFailedResponse.js";
import accountModel from "./account.model.js";
export const accountCreation = (req, res, next) => {
  const { empName, empEmail, empPassword, empAddress } = req.body;
  const { building, flatNo, society } = empAddress;
  if (!validateData(empName)) {
    res.send(createFailedResponse(400, "Check Employee Name"));
  }
  if (!validateData(empEmail) || !validateEmail(empEmail)) {
    res.send(createFailedResponse(400, "Check Employee Email"));
  }
  if (!validateData(empPassword)) {
    res.send(createFailedResponse(400, "Check Employee Password"));
  }
  if (!validateData(building)) {
    res.send(createFailedResponse(400, "Check Address"));
  }
  if (!validateData(flatNo)) {
    res.send(createFailedResponse(400, "Check Address"));
  }
  if (!validateData(society)) {
    res.send(createFailedResponse(400, "Check Address"));
  }
  next();
};

export const loginValidator = async (req, res, next) => {
  try {
    const { empEmail, empPassword } = req.body;
    let dbResponse = await accountModel.findOne({ empEmail: empEmail });

    console.log("emial", dbResponse);
    if (empEmail && empPassword) {
      if (!validateEmail(empEmail)) {
        return res
          .status(400)
          .send(createFailedResponse(400, "Email is not Enter"));
      }
      if (!validateData(empPassword)) {
        return res
          .status(400)
          .send(createFailedResponse(400, "Password is not Enter"));
      }
      if (
        empEmail !== dbResponse.empEmail ||
        empPassword !== dbResponse.empPassword
      ) {
        return res
          .status(400)
          .send(createFailedResponse(400, "Email or Password not match"));
      }
    } else {
      return res
        .status(400)
        .json(
          createFailedResponse(
            401,
            "Email or Password does not match with you tried"
          )
        );
    }
    next();
  } catch (error) {
    return res.status(400).json(createFailedResponse(401, "error" + error));
  }
};
const validateData = (data) => {
  if (!data || data.trim() === 0) {
    return false;
  }
  return true;
};
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
