const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const PantryStaff = require("./models/pantry.models");
const Manager = require("./models/manager.models");
const DeliveryPersonnel = require("./models/deliveryper.models");

// MongoDB Atlas connection
const DB_URI = "your_mongodb_atlas_connection_string";

const seedDatabase = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB Atlas");

    // Common password (hashed)
    const passwordHash = await bcrypt.hash("Password@2025", 10);

    // Predefined users
    const users = [
      {
        model: Manager,
        data: {
          name: "Hospital Food Manager",
          email: "hospital_manager@xyz.com",
          password: passwordHash,
        },
      },
      {
        model: PantryStaff,
        data: {
          name: "Inner Pantry Staff",
          email: "hospital_pantry@xyz.com",
          password: passwordHash,
        },
      },
      {
        model: DeliveryPersonnel,
        data: {
          name: "Delivery Personnel",
          email: "hospital_delivery@xyz.com",
          password: passwordHash,
        },
      },
    ];

    // Insert users
    for (const user of users) {
      const existingUser = await user.model.findOne({ email: user.data.email });
      if (!existingUser) {
        await user.model.create(user.data);
        console.log(`Inserted ${user.data.email}`);
      } else {
        console.log(`User ${user.data.email} already exists`);
      }
    }

    console.log("Database seeded successfully");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};

seedDatabase();
