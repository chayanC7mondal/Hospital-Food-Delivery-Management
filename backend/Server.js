const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const deliveryRouter = require("./controllers/deliveryper.controller");
const managerRouter = require("./controllers/manager.controller");
const pantryRouter = require("./controllers/pantry.controller");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/delivery", deliveryRouter);
app.use("/api/manager", managerRouter);
app.use("/api/pantry", pantryRouter);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));
