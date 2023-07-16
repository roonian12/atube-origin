import express from "express"
import { upload, see, edit, remove } from "../controllers/videoController.js";

const videoRouter = express.Router();

/*
videoRouter.get("/upload", (req, res) =>{
    res.send('videos upload!!! {videoRouter}')
  })
  */

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)/see", see); // url을 변수처럼 사용하겠다고 선언한 것. 정규 표현식이지만 자바스크립트에서 역슬레시 또한 예약어여서 두 번 넣음.
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);


export default videoRouter;