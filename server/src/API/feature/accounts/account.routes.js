import express from "express";
import { createAccount, loginAccount } from "./account.controller.js";
import { accountCreation, loginValidator } from "./account.validator.js";
const accountRoute = express.Router();

accountRoute.post("/addacounts", accountCreation, createAccount);
accountRoute.post("/loginaccounts", loginValidator, loginAccount);

export default accountRoute;
