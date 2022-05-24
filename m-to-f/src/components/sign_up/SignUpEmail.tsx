import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import BottomBtn from '../common/BottomBtn';
import { TextInput } from '../common/TextInput';
import EnvConfig from '../config/EnvConfig';
import { emailTest } from '../config/RegExp';
import { passVerify } from './SignUpFunction';
import { SignUpEmailInter } from './SignUpInterface';
import {
  clickNum,
  double,
  email,
  enterVerifyNum,
  veriftNum,
} from './signUpStore';

const SignUpEmail = ({
  doubleState,
  clickNumState,
  emailState,
  nicknameState,
  passwordState,
  enterVerifyState,
  verifyState,
  dispatch,
}: SignUpEmailInter) => {
  const emailVerify = async (event: any): Promise<void> => {
    event.preventDefault();
    try {
      const getDouble: AxiosResponse<object[]> = await axios({
        url: EnvConfig.DOUBLE_CHECK,
        method: 'get',
        params: {
          email: emailState,
        },
      });
      if (getDouble) {
        dispatch(double(true));
        console.log(getDouble);
      }
    } catch (e) {
      console.log(e);
      dispatch(double(false));
      alert('이미 가입되어 있는 메일입니다.');
    }
  };

  const mailSend = async (): Promise<void> => {
    try {
      if (clickNumState <= 0) {
        return alert('인증 한도를 초과했습니다');
      } else {
        dispatch(clickNum());
        alert(
          `인증 번호가 메일로 발송되었습니다. 메일 발송 가능 횟수 : ${clickNumState}`
        );
        const codeSend = await axios({
          url: EnvConfig.VERIFY_MAIL,
          params: {
            email: emailState,
          },
        });
        dispatch(veriftNum(codeSend.data));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (doubleState) {
      mailSend();
    }
  }, [doubleState]);

  return (
    <>
      <div className="emailWrap">
        <TextInput
          title={'이메일'}
          htmlFor={'email'}
          placeholder={'이메일을 입력해주세요'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(email(e.target.value))
          }
        />
      </div>
      <div className={doubleState ? '' : 'hidden'}>
        <TextInput
          title={'인증번호'}
          htmlFor={'email'}
          placeholder={'인증번호를 입력해주세요'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(enterVerifyNum(e.target.value))
          }
        />
      </div>
      <BottomBtn
        text={doubleState ? '회원가입 하기' : '인증번호 받기'}
        onclick={
          doubleState
            ? (e: any) =>
                passVerify(e, {
                  nicknameState,
                  passwordState,
                  emailTest,
                  emailState,
                  enterVerifyState,
                  verifyState,
                  doubleState,
                })
            : emailVerify
        }
      />
    </>
  );
};

export default SignUpEmail;
