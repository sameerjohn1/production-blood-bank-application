const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
// dotenv config
dotenv.config();

//mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// port
const PORT = process.env.PORT || 8080;

// routes
app.use("/api/v1/test", require("./routes/textRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoute"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// STATIC FOLDER
app.use(express.static(path.join(__dirname, "./client/build")));

// static routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// listening
app.listen(PORT, () => {
  console.log(
    `Node Server Running in ${process.env.DEV_MODE}Mode on PORT ${process.env.PORT}`
      .bgBlue.white
  );
});
