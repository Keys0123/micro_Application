const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", require("./routes/productRouter"));
app.use("/filter", require("./routes/filterRouter"));

(async () => {
  try {
    const mongo_database = process.env.MONGO_URL;

    await mongoose.connect(mongo_database);

    console.log("Connected to MongoDB");

    const port = process.env.PORT || 9000;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log("Error", err);
  }
})();
