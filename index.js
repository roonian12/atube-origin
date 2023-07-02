import express from "express"; // ES6 스타일로 적용
// Common JS. explress modules에 있는 소스코드에 접근할 수 있다.
// const express = require('express') // 임포트. 브라우저에서 만들어진 스크립트 언어는 스크립트 태그를 통해서 html을 포함시키면 됐는데 node js는 임포트가 가능하다. 
const app = express()
const port = 3000 // IP(컴퓨터)만 가지고 컴퓨터의 프로세스 특정 네트워크에 접근할 수 없으므로 port 정보가 필요하다. 3000번 호실로 들어간다는 느낌.

app.get('/', (req, res) => { // get : url의 특정 key value 값으로 연결된 곳에 접근하는 방식
  console.log("home!!!!");
  res.send('Hello World!')
}) // call-back 함수 : 나중에 처리하기 위해 인자를 함수로 받을 경우에 인자로 주는 함수를 콜백이라고 한다. 인자로 받아두고 있다가 요청이 오면 인자를 전달함.

app.listen(port, () => { // 서버는 요청을 기다리므로 listen. 포트를 지정하고 콜백함수를 준다.
  console.log(`Example app listening on port ${port}`) // 포트는 4번째 줄에 선언되어 있음.
})