import mongoose from "mongoose";

const HelpCenterSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, trim: true },
phone: { type: String, trim: true },
subject: { type: String, required: true, trim: true },
message: { type: String, required: true, trim: true },
},
{ timestamps: true }
)


export default mongoose.model("HelpCenter", HelpCenterSchema);