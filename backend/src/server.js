require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRouters = require("./routes/authRoutes")
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use("/auth",authRouters)

app.get("/", (req, res) => {
  res.send("EduCommunity API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});