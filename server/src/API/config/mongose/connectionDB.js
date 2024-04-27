import mongoose from "mongoose";
const connectionDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/myecommerce")
    .then(() => {
      console.log("Db connected SuccessFully");
    })
    .catch((err) => {
      console.log("Db not Connected", err);
    });
};

export default connectionDB;
