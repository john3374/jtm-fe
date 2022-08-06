import React from 'react';
import styled from 'styled-components';
import { Btn } from '../common/Btn';
import Background from '../../static/main.png';

interface PropsType {
  api: string;
}
const GoToLogin = (props: PropsType) => {
  const REST_API_KEY = props.api;
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Container>
      <BtnComponent>
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
      </BtnComponent>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-color: #fffdea;
  width: 100%;
  height: 100%;
`;

const BtnComponent = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: 1.6rem;
  margin-bottom: 3rem;
`;

export default GoToLogin;
