import express from "express";
import boardRouter from "./routes/boardRoutes";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/boards", boardRouter);

export default app;
