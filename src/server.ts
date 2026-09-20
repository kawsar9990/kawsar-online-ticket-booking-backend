import "./config/loadEnv.js";
import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";

const MONGODB_URL = config.database_url || process.env.MONGODB_URL;
const PORT = config.port || process.env.PORT || 5000

if(!MONGODB_URL){
console.error("❌ MONGODB_URL is not defined in environment variables!");
}


mongoose.connect(MONGODB_URL as string)
.then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error("Error connecting to database:", error);
});