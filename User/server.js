const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./routes/userRouter"));

(async () => {
  try {
    const mongo_database = process.env.MONGO_URL;

    await mongoose.connect(mongo_database);

    console.log("Connected to MongoDB");

    const port = process.env.PORT || 9003;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log("Error", err);
  }
})();
