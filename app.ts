import express, { Request, Response } from "express"
import boardRouter from "./routes/boardRoutes"
import morgan from "morgan"
const app = express();

if(process.env.NODE_ENV == "development") {
    app.use(morgan("dev"))
}

app.use(express.json());
console.log(process.env.NODE_ENV)
app.use("/api/v1/boards", boardRouter)


export default app;