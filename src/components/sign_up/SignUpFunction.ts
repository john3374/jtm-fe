import axios from 'axios';
import EnvConfig from '../config/EnvConfig';
import { FirstVerify, SecondVerify } from './SignUpInterface';
import { nicknamePass } from './signUpStore';

// export const firstVerify = (
//   e: any,
//   {
//     nickNameTest,
//     nicknameState,
//     passwordTest,
//     passwordState,
//     repassword,
//   }: FirstVerify
// ) => {
//   e.preventDefault();
//   if (
//     nickNameTest.test(nicknameState) &&
//     passwordTest.test(passwordState) &&
//     repassword === passwordState
//   ) {
//     return true;
//   } else {
//     alert('입력 내용을 확인해주세요');
//   }
// };

const verify = ({
  emailTest,
  emailState,
  enterVerifyState,
  verifyState,
  doubleState,
  nickNameTest,
  nicknameState,
  nicknamePass,
  passwordTest,
  passwordState,
  rePassword,
}: FirstVerify) => {
  if (
    emailTest.test(emailState) &&
    enterVerifyState === verifyState &&
    doubleState &&
    nickNameTest.test(nicknameState) &&
    passwordTest.test(passwordState) &&
    rePassword === passwordState &&
    nicknamePass
  )
    return true;
  else return false;
};

export const passVerify = async (
  e: React.FormEvent<HTMLFormElement>,
  {
    emailTest,
    emailState,
    enterVerifyState,
    verifyState,
    doubleState,
    nickNameTest,
    nicknameState,
    passwordTest,
    passwordState,
    rePassword,
    nicknamePass,
    nav,
  }: SecondVerify
): Promise<void> => {
  e.preventDefault();
  if (
    verify({
      emailTest,
      emailState,
      enterVerifyState,
      verifyState,
      doubleState,
      nickNameTest,
      nicknameState,
      passwordTest,
      passwordState,
      rePassword,
      nicknamePass,
    })
  ) {
    try {
      await axios({
        method: 'post',
        url: EnvConfig.USER_DATA,
        data: {
          email: emailState,
          password: passwordState,
          userName: nicknameState,
        },
      })
        .then(function (response) {
          if (response.status === 200) {
            alert('회원가입이 완료되었습니다');
            nav('/');
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

export const nicknameVerify = async (
  e: any,
  nickname: string,
  dispatch: React.Dispatch<any>
) => {
  e.preventDefault();
  try {
    const nicknamePassState = await axios({
      method: 'get',
      url: EnvConfig.NICK_CHECK,
      params: {
        userName: nickname,
      },
    });
    if (nicknamePassState) {
      alert('사용 가능합니다!');
      dispatch(nicknamePass(true));
    }
  } catch (e) {
    console.log(e);
    alert('사용할 수 없는 닉네임입니다');
  }
};
