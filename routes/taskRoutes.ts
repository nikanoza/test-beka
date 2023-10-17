import { Router } from "express";
import { getAllTask } from "../controllers/taskController";

const router = Router()
router.route("/").get(getAllTask)


export default router;