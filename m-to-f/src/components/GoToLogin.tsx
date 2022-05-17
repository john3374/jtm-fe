import React from "react"
// import styled from "styled-components"
import { Btn } from "./common/Btn"
// import {log} from "util";

interface PropsType {
    api:string
}
const GoToLogin = (props : PropsType) => {
    const REST_API_KEY = props.api;
    const REDIRECT_URI : string= "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL =
        `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <>
            <Btn 
                text="카카오톡으로 시작하기"
                href={KAKAO_AUTH_URL}
                logo="kakao.svg" 
                background="#FAE54D"
                />
            <Btn
                text="이메일로 시작하기"
                link="login"
                logo="mail.svg"
                background="black"
                color="white"
                />
        </>
    )
}



export default GoToLogin