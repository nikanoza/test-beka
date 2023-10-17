import { Request, Response } from "express";

const getAllTask = (req: Request, res: Response) => {
    res.status(200).json({message: "hey"})
}

export {getAllTask};