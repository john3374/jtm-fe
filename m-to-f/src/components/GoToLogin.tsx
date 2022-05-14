import React from "react"
import styled from "styled-components"
import { Btn } from "./common/Btn"

const GoToLogin = () => {
    return (
        <>
            <Btn 
                text="카카오톡으로 시작하기"
                href="" 
                logo="kakao.svg" 
                background="#FAE54D"
                />
            <Btn
                text="이메일로 시작하기"
                href=""
                logo="mail.svg"
                background="black"
                color="white"
                />
        </>
    )
}



export default GoToLogin