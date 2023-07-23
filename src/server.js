// const express = require('express') // require 등을 사용하여 가져오는 이런 방식을 common JS라고 한다. express : node 모듈 이름
import express from "express" // ES 6 스타일. 이건 Babel이 해줌.
import morgan from "morgan"
import globalRouter from "./routers/globalRouter.js"
import userRouter from "./routers/userRouter.js"
import videoRouter from "./routers/videoRouter.js"

const app = express();
// const port = 3000; // 이 부분을 80으로 고치면 btube.com:3000이라고 주지 않아도 됨
const port = 80
const logger = morgan("dev");

// console.log('process.cwd() ::: %s',process.cwd()); <= 이건 내가 오류 났을 때 오류를 알아보기 위해 적은 것.
// 미들웨어는 순서가 중요하기 때문에 logger 앞에 pug를 설정하였다.
app.set('views', process.cwd() + '/src/views');
app.set('view engine', 'pug');
app.use(logger);

const middleWare = (req, res, next) =>{
  console.log(`LOGGED`);
  next(); // 서버가 요청을 걸러내는 것
};

/*
const home = (req, res) => { // request : 브라우저에 요청한 정보. response : 브라우저에서 응답하는 정보. next : 사용하지 않으므로 넣지 않음.
  console.log('home')
  res.send('Hello World! nodemon watching!')
  // res.end() // 응답에 대한 요청을 주지 않고 끝내는 방법. localhost:3000에서 확인해보면 아무 응답도 없음.
} // 해당 코드는 globalRouter에 적어서 뺌.
*/

/*
const handleJoin = (req, res) =>{
  res.send('join!!!')
}

const handleLogin = (req, res) =>{
  res.send('Login!!')
}

const handleSearch = (req, res) =>{
  res.send('Search!!!')
}


const handleUserEdit = (req, res) =>{
  res.send('user edit!!!')
}

const handleUserRemove = (req, res) =>{
  res.send('user remove!!!')
}

const handleVideosUpload = (req, res) =>{
  res.send('videos upload!!!')
}
*/

app.use('/', globalRouter); // router를 import하기 때문에 app.get이 아닌 app.use를 사용하여 globalRouter를 불러온다.
// 한 번 globalRouter 분기 처리가 되면 아래에는 router로 연결된다.
// app.get('/join', handleJoin) // handleJoin을 join이라는 url을 매핑시킨 것.
app.use('/users', userRouter);
// app.use('/videos', userRouter);
app.use('/videos', videoRouter);
/*
app.get('/users/edit', handleUserEdit)
app.get('/users/remove', handleUserRemove)
app.get('/videos/upload', handleVideosUpload)
*/

/*
app.use(middleWare); // use가 먼저 오고 get을 줘야함. response send를 하면 끝나기 때문에 순서 중요. 
app.get('/', home);
*/

app.listen(port, () => { // 언제 요청이 올 지 모르니까 계속 listening을 하고 있다.
  console.log(`Example app listening on port ${port}`)
})
