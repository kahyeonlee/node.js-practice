/*
    라우터
        -메인서버가 모든 경로에대한 처리를 하기는 부담스럽다. -> 페이지가 많아지면 경로도 증가!
        -각각의 경로에 관련된 일들은 라우터가 처리
        -app에게 사용한 라우터만 등록
*/

const express=require('express');
const app =express();


app.listen(3000);

