import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const port = 3000;
const app = express();

app.use(cors({ origin: true, credentials: true }));

const whitelist = ["http://localhost:4000", "http://example2.com"];
let corsOptionsDelegate = function (req: any, callback: any) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(corsOptionsDelegate);
app.use(helmet());
app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
