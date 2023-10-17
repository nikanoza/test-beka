import express, { Request, Response } from "express"
import taskRouter from "./routes/taskRoutes"
import morgan from "morgan"
const app = express();

if(process.env.NODE_ENV == "development") {
    app.use(morgan("dev"))
}
console.log(process.env.NODE_ENV)
app.use("/api/v1/tasks", taskRouter)


export default app;