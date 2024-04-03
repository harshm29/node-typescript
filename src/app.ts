import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// Create Express server
const app = express(); // New express instance
const port = 3000; // Port number

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan("dev")); // Enable Morgan

// Start Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Export Express app
export default app;
