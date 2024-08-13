// 서버에서 가장 기본이 되는 이정표!
// router변수에 express 안에 잇는 router기능만 넣어주기

const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    // main.html 파일을 보여주기!
})