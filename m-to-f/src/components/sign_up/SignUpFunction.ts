import axios from 'axios';
import EnvConfig from '../config/EnvConfig';
import { FirstVerify, SecondVerify } from './SignUpInterface';
import { next } from './signUpStore';

export const firstVerify = (
  e: any,
  {
    nickNameTest,
    nicknameState,
    passwordTest,
    passwordState,
    repassword,
    dispatch,
  }: FirstVerify
) => {
  e.preventDefault();
  if (
    nickNameTest.test(nicknameState) &&
    passwordTest.test(passwordState) &&
    repassword === passwordState
  ) {
    dispatch(next(true));
    return true;
  } else {
    alert('입력 내용을 확인해주세요');
  }
};

export const passVerify = async (
  e: React.FormEvent<HTMLFormElement>,
  {
    nicknameState,
    passwordState,
    emailTest,
    emailState,
    enterVerifyState,
    verifyState,
    doubleState,
  }: SecondVerify
): Promise<void> => {
  e.preventDefault();
  if (
    emailTest.test(emailState) &&
    enterVerifyState === verifyState &&
    doubleState
  ) {
    try {
      await axios({
        method: 'post',
        url: EnvConfig.POST_DATA,
        data: {
          email: emailState,
          password: passwordState,
          userName: nicknameState,
        },
      })
        .then(function (response) {
          if (response.status === 200) {
            alert('회원가입이 완료되었습니다');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
    // return
  } else {
    alert('입력 정보를 확인해주세요');
  }
};
