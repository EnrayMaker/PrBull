const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Router.js");
//const path = require("path");

const DB_URL = `mongodb://localhost:27017/`;
const PORT = 5000;
const app = express();
//

//app.use(express.static("Backend/static"));
//app.use(fileuploader({}));
app.use("/api", Router);

async function StartApp() {
  try {
    const conn = await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server start on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
StartApp();
