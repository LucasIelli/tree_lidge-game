import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import registerRouter from "./routes/Register.js";
import loginRouter from "./routes/Login.js";
import cors from "cors";
import treesRouter from "./routes/Trees.js";

const PORT = process.env.PORT || 5000;

const App = express();

App.use(express.json());

App.use(cors());

App.use("/register", registerRouter);

App.use("/login", loginRouter);

App.use("/trees", treesRouter);

// eslint-disable-next-line no-console
mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected"));

if (process.env.NODE_ENV === "production") {
    App.use(express.static("../client/build"));
}

App.listen(PORT, console.log(`Server starting at ${PORT}`));
