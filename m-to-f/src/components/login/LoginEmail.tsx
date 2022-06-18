import React from 'react';
import styled from 'styled-components';
import { MoveBtn } from '../common/MoveBtn';
import { TextInput } from '../common/TextInput';
import CustomBottomButton from '../common/BottomBtn';
import Header from '../layout/Header';

const LoginEmail = () => {
  return (
    <>
      <Header pageNm="로그인" />
      <StyledFormWrapper>
        <TextInput
          htmlFor="email"
          // value={email}
          title="이메일"
          // onChange={(e : any)=> setEmail(e.target.value)}
          // disabled={loading}
        />
        <TextInput
          htmlFor="password"
          isPassword={true}
          // value={password}
          title="비밀번호"
          // onChange={(e : any)=> setPassword(e.target.value)}
          // disabled={loading}
        />
        <MoveBtn text="아직 회원이 아니신가요?" link="signUp" />
      </StyledFormWrapper>
      <CustomBottomButton text="로그인하기" />
    </>
  );
};

const StyledFormWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;

export default LoginEmail;
