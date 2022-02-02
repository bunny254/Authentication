require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./Routes/Users");
const authRoutes = require("./Routes/Auth");

//database connection
connection();

//middlewares

app.use(express.json());
app.use(cors());

//routes
app.use("/api/Users", userRoutes);
app.use("/api/Auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening on ${port}..."));
