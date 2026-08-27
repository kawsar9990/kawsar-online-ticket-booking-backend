import mongoose from "mongoose";


const SubCategorySchema = new mongoose.Schema({
name: { type: String, required: true },
image: { type: String, required: true },
district: { type: String, required: true },
description: { type: String, required: true }
});




const cityDestinationSchema = new mongoose.Schema(
{
name: { type: String, required: true },
slug: { type: String, required: true, unique: true },
homeimg: { type: String, required: true },
homedescription: { type: String, required: true },
subCategories: [SubCategorySchema]
},
{timestamps: true}
);

export default mongoose.model("citydestinations", cityDestinationSchema)