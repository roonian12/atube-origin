// const express = require('express') // require 등을 사용하여 가져오는 이런 방식을 common JS라고 한다. express : node 모듈 이름
import express from "express" // ES 6 스타일. 이건 Babel이 해줌.
import morgan from "morgan"

const app = express()
const port = 3000
const logger = morgan("combined")

const home = (req, res) => { // request : 브라우저에 요청한 정보. response : 브라우저에서 응답하는 정보. next : 사용하지 않으므로 넣지 않음.
  console.log('home')
  res.send('handle home')
  // res.end() // 응답에 대한 요청을 주지 않고 끝내는 방법. localhost:3000에서 확인해보면 아무 응답도 없음.
}
app.use(logger) // use가 먼저 오고 get을 줘야함. response send를 하면 끝나기 때문에 순서 중요. 
app.get('/', home)

app.listen(port, () => { // 언제 요청이 올 지 모르니까 계속 listening을 하고 있다.
  console.log(`Example app listening on port ${port}`)
})
