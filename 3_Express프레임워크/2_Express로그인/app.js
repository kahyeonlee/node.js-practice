const express = require("express");
const app =express();

// 1. 정적 파일 등록
app.use(express.static("public"));

// 2. 서버 등록
app.get("/",(req,res)=>{
    console.log("서버 생성");
    //메인페이지 등록
    res.sendFile(__dirname+"/public/로그인.html")
})


// get 방식으로 넘어온 데이터 처리
app.get("/getLogin",(req,res)=>{
    console.log("get 방식으로 요청이 들어왔습니다.")
    console.log(req.url);
})

// 3. 포트 등록
app.listen(3000);
