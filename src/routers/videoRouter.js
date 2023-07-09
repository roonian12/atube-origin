import express from "express"

const videoRouter = express.Router();

  
videoRouter.get("/upload", (req, res) =>{
    res.send('videos upload!!! {videoRouter}')
  })

export default videoRouter;