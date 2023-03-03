import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import noteRoute from "./routes/noteRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

if (!process.env.MONGO_CONNECT_URI)
  throw new Error("You must provide uri for mongo connect in env.");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))
// app.use(express.static(path.resolve(__dirname, "../../client/build")));

const corsOptions = {
  origin: "*",
  "Access-Control-Allow-Origin": "*",
};
app.use(cors(corsOptions));
app.use("/notes", noteRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
// });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGO_CONNECT_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected into MongoDB.."))
  .catch((err) => console.error(err));
