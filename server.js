require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const path = require('path');
const PORT = process.env.PORT || 3000;

const productRoutes = require("./routes/products");

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use(
  "/assets/product_images/laptop",
  express.static(path.join(__dirname, "assets", "product_images", "laptop"))
);

app.use(
  "/assets/product_images/smart-phone",
  express.static(path.join(__dirname, "assets", "product_images", "smart-phone"))
);

mongoose.connect(process.env.MONGO_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/products", productRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
