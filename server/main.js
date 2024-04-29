import express from "express";
import connectionDB from "./src/api/config/connectionDB.js";
import timesheetRouter from "./src/API/feature/timesheet/timesheet.routes.js";
import accountRoute from "./src/API/feature/accounts/account.routes.js";

const app = express();

const PORT = 3001;

app.use(express.json());
connectionDB();
app.use("/accounts", accountRoute);
app.use("/timesheet", timesheetRouter);

app.listen(PORT, () => {
  console.log(`The Server ruunig localhost:${PORT} `);
});
