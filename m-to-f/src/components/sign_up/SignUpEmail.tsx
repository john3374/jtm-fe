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
  return (
    <>
      <div className="emailWrap">
        <TextInput
          title={'이메일을 입력해주세요'}
          htmlFor={'email'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(email(e.target.value))
          }
        />
      </div>
      <div>
        <TextInput
          title={'인증번호를 입력해주세요'}
          htmlFor={'email'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(enterVerifyNum(e.target.value))
          }
        />
      </div>

      {/* <BottomBtn
        text={doubleState ? '회원가입 하기' : '인증메일 받기'}
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
      /> */}
    </>
  );
};

export default SignUpEmail;
