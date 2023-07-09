import express from "express"

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => {
    console.log('home')
    res.send('handle home!')
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


  export default globalRouter; // 이 파일 전체를 export 한다. export를 먼저 해줘야 server.js에서 import가 가능하다