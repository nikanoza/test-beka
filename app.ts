import express, { Request, Response } from "express"
import tourRouter from "./routes/taskRoutes"
const app = express();

app.use("/api/v1/tasks", tourRouter)


export default app;