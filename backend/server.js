import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { sequelize } from "./src/config/db.js";
import "./src/models/index.js";   // Import relationships




const PORT = process.env.PORT || 8083;

// Function to start server
const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");

    // Sync models (create tables if not exist)
    await sequelize.sync({ alter: true });
    console.log("✅ Models synchronized");

    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

// Call function
startServer();
