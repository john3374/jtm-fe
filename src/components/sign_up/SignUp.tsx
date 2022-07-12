import axios, { AxiosResponse } from 'axios';
import React, { useState, useReducer, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomBtn from '../common/BottomBtn';
import { TextInput } from '../common/TextInput';
import EnvConfig from '../config/EnvConfig';
import { nickNameTest, passwordTest, emailTest } from '../config/RegExp';
import './signUp.scss';
import SignUpEmail from './SignUpEmail';

import { nicknameVerify, passVerify } from './SignUpFunction';
import {
  clickNum,
  double,
  initialState,
  nickname,
  password,
  reducer,
  veriftNum,
} from './signUpStore';

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [rePassword, setRePassword] = useState<string>('');
  // 닉네임 중복 체크를 했는지 확인해야 함
  const nav = useNavigate();

  const doubleState = state.doubleState;
  const clickNumState = state.clickNumState;
  const emailState = state.emailState;
  const nicknameState = state.nicknameState;
  const passwordState = state.passwordState;
  const enterVerifyState = state.enterVerifyState;
  const verifyState = state.verifyState;
  const nicknamePass = state.nicknamePass;

  // 페이퍼 개설
  // const q2 = async (e: any) => {
  //   e.preventDefault();
  //   const w = await axios({
  //     method: 'POST',
  //     url: 'http://3.39.162.248:80/paper',
  //     data: {
  //       paper: {
  //         paperTitle: 'sadasjasfja',
  //         skin: 3,
  //       },
  //       user: {
  //         email: 'jam@gmail.com',
  //       },
  //     },
  //   });
  //   console.log(w);
  // };

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
        alert('인증번호가 발송됐습니다');
      }
    } catch (e) {
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
    if (doubleState && !verifyState) {
      mailSend();
    }
  }, [doubleState]);

  // const q3 = async (e: any) => {
  //   e.preventDefault();
  //   const w = await axios({
  //     method: 'post',
  //     url: 'http://3.39.162.248:80/user/v1',
  //     data: {
  //       email: 'jjs327020@gmail.com',
  //       password: '546546asd6',
  //       userName: '김',
  //     },
  //   });
  //   console.log(w);
  // };

  return (
    <>
      <div className="signWrap">
        <div className="top">
          <p>회원가입</p>
        </div>
        <form id="signUp">
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
          <div className="nickNameWrap">
            <TextInput
              title={'닉네임'}
              htmlFor={'nickName'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(nickname(e.target.value))
              }
            />
            <button
              onClick={(e: any) => nicknameVerify(e, nicknameState, dispatch)}
            >
              닉네임 중복 체크
            </button>
          </div>
          <div className="passwordWrap">
            <TextInput
              title={'비밀번호'}
              htmlFor={'password'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(password(e.target.value))
              }
            />
          </div>
          <div className="rePasswordWrap">
            <TextInput
              title={'비밀번호 확인'}
              htmlFor={'rePassword'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRePassword(e.target.value)
              }
            />
          </div>
          <BottomBtn
            text={doubleState ? '다음' : '인증메일 받기'}
            onclick={(e: any) =>
              doubleState
                ? passVerify(e, {
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
                  })
                : emailVerify(e)
            }
          />
          {/* {next ? (
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
              
            </>
          )} */}
          {/* <button onClick={(e: any) => q(e)}>asd</button> */}
          {/* <button onClick={(e: any) => q3(e)}>asd</button> */}
          {/* <button onClick={() => nav('/')}>asd</button> */}
        </form>
      </div>
    </>
  );
};

export default SignUp;
