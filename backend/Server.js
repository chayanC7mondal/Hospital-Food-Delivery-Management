const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package

const foodManagerRoutes = require("./routes/manager.routes");
const innerPantryRoutes = require("./routes/pantry.routes");
const deliveryPersonnelRoutes = require("./routes/deliveryper.routes");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json()); // Middleware for parsing JSON requests

// Use the routes for each role
app.use("/api/food-manager", foodManagerRoutes);
app.use("/api/inner-pantry", innerPantryRoutes);
app.use("/api/delivery-personnel", deliveryPersonnelRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/yourdbname", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
