import express from "express"
import { edit, remove } from "../controllers/userController.js";

const userRouter = express.Router();
/*
userRouter.get("/edit", (req, res) =>{
    res.send('user edit!!! {userRouter}')
})
  
userRouter.get("/remove", (req, res) =>{
    res.send('user remove!!! {userRouter}')
})
*/
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;