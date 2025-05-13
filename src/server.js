import dotenv from "dotenv";
import connectDB from "./database/database.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
    .then(() => {
        const port = process.env.PORT || 4000
        app.listen(port, () => {
            console.log("\n Server is running on port: ", port);
        })
    }).catch((e => {
        console.error("MongoDB connection failed !!!", e);
    }))
