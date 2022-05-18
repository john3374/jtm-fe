import React from "react";
import styled from "styled-components";
import { MoveBtn } from "../common/MoveBtn";
import { TextInput } from "../common/TextInput";
import CustomBottomButton from "../common/BottomBtn";
import Header from "../layout/Header";

const LoginEmail = () => {
  return (
    <>
      <Header pageNm="로그인" />
      <LoginForm />
      <CustomBottomButton text="로그인하기" href="" />
    </>
  );
};

const LoginForm = () => {
  return (
    <StyledFormWrapper>
      <TextInput title="이메일" />
      <TextInput title="비밀번호" />
      <MoveBtn text="아직 회원이 아니신가요?" />
    </StyledFormWrapper>
  )
}

const StyledFormWrapper = styled.section`
display: flex;
flex-flow: column nowrap;
`
export default LoginEmail;