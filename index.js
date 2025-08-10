

import express from "express";
import Connection from "./database/db.js";
import route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 8000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Start server after DB connection
const startServer = async () => {
  try {
    await Connection(); 
    app.use("/", route);

    app.listen(PORT, () => {
      console.log(`✅ Server is running successfully on PORT ${PORT}`);
    });
  } catch (error) {
    console.error(" Failed to start server:", error);
    process.exit(1); // Exit if DB fails
  }
};

startServer();



























































