import React, { useState, useReducer } from 'react';
import BottomBtn from '../common/BottomBtn';
import { TextInput } from '../common/TextInput';
import { nickNameTest, passwordTest } from '../config/RegExp';
import './signUp.scss';
import SignUpEmail from './SignUpEmail';

import { firstVerify } from './SignUpFunction';
import { initialState, nickname, password, reducer } from './signUpStore';

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [repassword, setRePassword] = useState<string>('');

  const doubleState = state.doubleState;
  const clickNumState = state.clickNumState;
  const emailState = state.emailState;
  const nicknameState = state.nicknameState;
  const passwordState = state.passwordState;
  const enterVerifyState = state.enterVerifyState;
  const verifyState = state.verifyState;
  const next = state.next;

  return (
    <>
      <div className="signWrap">
        <div className="top">
          <p>회원가입</p>
        </div>
        <form id="signUp">
          {next ? (
            <SignUpEmail
              doubleState={doubleState}
              clickNumState={clickNumState}
              emailState={emailState}
              nicknameState={nicknameState}
              passwordState={passwordState}
              enterVerifyState={enterVerifyState}
              verifyState={verifyState}
              dispatch={dispatch}
            />
          ) : (
            <>
              <div className="nickNameWrap">
                <TextInput
                  title={'닉네임'}
                  htmlFor={'nickName'}
                  placeholder={'10글자 이하의 닉네임이 좋아요.'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(nickname(e.target.value))
                  }
                />
              </div>
              <div className="passwordWrap">
                <TextInput
                  title={'비밀번호'}
                  htmlFor={'password'}
                  placeholder={'8글자 이상, 특수문자를 포함해주세요'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(password(e.target.value))
                  }
                />
              </div>
              <div className="rePasswordWrap">
                <TextInput
                  title={'비밀번호 확인'}
                  htmlFor={'rePassword'}
                  placeholder={'비밀번호를 다시 입력해주세요'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRePassword(e.target.value)
                  }
                />
              </div>
              <BottomBtn
                text={'다음'}
                onclick={(e: any) =>
                  firstVerify(e, {
                    nickNameTest,
                    nicknameState,
                    passwordTest,
                    passwordState,
                    repassword,
                    dispatch,
                  })
                }
              />
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;
