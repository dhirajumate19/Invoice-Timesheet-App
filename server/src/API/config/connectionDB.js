import mongoose from "mongoose";
import { dbUrl } from "./config.js";
const connectionDB = () => {
  mongoose
    .connect(`${dbUrl}/myecommerce`)
    .then(() => {
      console.log("Db connected SuccessFully");
    })
    .catch((err) => {
      console.log("Db not Connected", err);
    });
};

export default connectionDB;
