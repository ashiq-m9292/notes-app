// dotenv configuration
import dotenv from "dotenv";
dotenv.config();

// express app configuration
import express from "express";
const app = express();

// cors configuration
import cors from "cors";
app.use(cors());

// express json configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// port configuration
const port = process.env.PORT || 5000;

// database configuration
import dbConnect from './src/db/database.js';
dbConnect(process.env.DB_URL).then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
})

// routes configuration
import router from "./src/Routes/notesRoutes.js";
app.use("/api/v1/notes", router);