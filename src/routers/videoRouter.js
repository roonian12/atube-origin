import express from "express"
import { upload, watch, getEdit, postEdit } from "../controllers/videoController.js";

const videoRouter = express.Router();

/*
videoRouter.get("/upload", (req, res) =>{
    res.send('videos upload!!! {videoRouter}')
  })
  */

videoRouter.get("/upload", upload)
videoRouter.get("/:id(\\d+)", watch) // url을 변수처럼 사용하겠다고 선언한 것. 정규 표현식이지만 자바스크립트에서 역슬레시 또한 예약어여서 두 번 넣음.
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit) // route는 post나 get 방식을 가리지 않고 받는다. 그리고 뒤에서 방식을 설정한다.



export default videoRouter;