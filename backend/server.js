require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./lib/db");
dbConnect();

app.use(express.json());

//Router import
const authRouter = require("./routes/auth.routes");

app.use("/api/auth/v1/", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
