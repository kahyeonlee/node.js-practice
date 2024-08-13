const express = require("express");
const app =express();
const bp = require("body-parser");

// 1. 정적 파일 등록
app.use(express.static("public"));
app.use(bp.urlencoded({extended:true}));

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
    // get방식으로 넘어온 데이터를 객체로 출력 -> req.query
    console.log(req.query);

    // 실습
    // 입력한 id 가 "smhrd"이고, 비밀번호가 "1234"라면 -> coonsole창에 로그인 성공
    // 아니라면 -> console창에 로그인 실패 출력

    if(req.query.id=="smhrd"&&req.query.pw=="1234"){
        console.log("로그인 성공")
    }else{
        console.log("로그인 실패")
    }
})

// post데이터 처리
// post데이터는 buffer형태의 암호화된 데이터가 넘어온다 -> 문자로 변형 -> 객체 변형
app.post("/postLogin",(req,res)=>{
    // bp가 변환한 데이터를 활용
    console.log(req.body);
})

// 3. 포트 등록
app.listen(3000);