import { SignUpEmailInter } from '@src/interfaces/ISignUp';
import React from 'react';
import { TextInput } from '../common/TextInput';
import { email, enterVerifyNum } from './signUpStore';

const SignUpEmail = ({ dispatch }: SignUpEmailInter) => {
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
