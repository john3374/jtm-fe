import { loginUser, useAuthDispatch, useAuthState } from '../../context';
import React, { useEffect, useState } from 'react';

import CustomBottomButton from '../common/BottomBtn';
import Header from '../layout/Header';
import LoginForm from './LoginForm';
import { isEmail } from './Validation';
import { useNavigate } from 'react-router-dom';

const LoginEmail = () => {
  useEffect(() => {
    // 로그인하러 들어오면 기존에 저장돼있던 로컬스토리지 삭제
    // localStorage.removeItem('currentUser');
  }, []);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const [isValidated, setValidation] = useState<boolean>(false);

  const { loading } = useAuthState(); // initialState 안의 것을 구조 분해 할당
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidated) {
      try {
        const responseData = await loginUser(dispatch, inputs);
        // 이거 userName 나중에 token으로 바꿔야함
        if (!responseData?.userName) return;
      } catch (e) {
        console.error(e);
      }
      // 로그인 완료 시 메인으로 이동
      navigate('../createPaper', { replace: true });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValidation(isEmail(email));
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  };

  return (
    <>
      <Header pageNm="로그인" to="/login" />
      <LoginForm
        onChange={onChange}
        email={email}
        password={password}
        disabled={loading}
        autocomplete="on"
      />
      <CustomBottomButton
        text="로그인하기"
        onclick={handleLogin}
        disabled={!isValidated}
      />
    </>
  );
};

// 메모!
export default LoginEmail;
