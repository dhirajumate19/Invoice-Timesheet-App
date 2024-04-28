import mongoose from "mongoose";

const accountSchema = mongoose.Schema(
  {
    empName: { type: String, required: true },
    empEmail: { type: String, required: true },
    empId: { type: String, required: true },
    empPassword: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    empAddress: {
      building: { type: String, required: true },
      flatNo: { type: Number, required: true },
      society: { type: String, required: true },
    },
  },
  { timestamps: true }
);
const accountModel = mongoose.model("account", accountSchema);
export default accountModel;
