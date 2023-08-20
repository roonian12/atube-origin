import express from "express" // 전체 파일을 import 하는 방법
// import {join} from "../controllers/userController.js"; // join을 가져옴import. 개별적으로 가져올 때는 중괄호를 쳐준다.
// import {login} from "../controllers/userController.js"; // login을 가져옴import
// 위 두 줄을 한 줄로 표시하는 방법
import { join, login } from "../controllers/userController.js";
import { trendings } from "../controllers/videoController.js";


const globalRouter = express.Router();

/*
globalRouter.get("/", (req, res) => {
    console.log('home')
    res.send('handle home!') // 라우팅
  })

globalRouter.get("/join", (req, res) => {
    res.send('join!!! {globalRouter}')
  })

  globalRouter.get("/login", (req, res) =>{
    res.send('Login!! {globalRouter}')
  })
  
  globalRouter.get("/search", (req, res) =>{
    res.send('Search!!! {globalRouter}')
  })
  */

  globalRouter.get("/", trendings);
  globalRouter.get("/join", join); // import한 join을 가져옴. 사용하지 않는 변수가 있다면 흐리게 처리를 하는데 주석처리한 부분을 해당 코드로 바꿔주면 흐릿하게 사라짐
  globalRouter.get("/login", login);
// (req, res) =>{ res.send('Search!!! {globalRouter}')} => 이 부분을 위에서 import한 것으로 바꿈
  

  export default globalRouter; // 이 파일 전체를 export 한다. export를 먼저 해줘야 server.js에서 import가 가능하다