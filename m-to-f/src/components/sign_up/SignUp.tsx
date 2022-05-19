import axios, { AxiosResponse } from 'axios';
import React, { useState, useReducer } from 'react';
import BottomBtn from '../common/BottomBtn';
import { TextInput } from '../common/TextInput';
import Config from '../config/EnvConfig';
import { emailTest, nickNameTest, passwordTest } from '../config/RegExp';
import './signUp.scss';
import { emailVerifyActive } from './SignUpEmail';
// import {
//   doubleCheck,
//   email,
//   emailVerifyActive,
//   enterVerify,
//   verifyNum,
// } from './SignUpEmail';
import { passVerify } from './SignUpFunction';
import { initialState, reducer } from './signUpStore';

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [current, setCurrent] = useState<number>(0);
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repassword, setRePassword] = useState<string>('');

  //   console.log(state);

  // const [disabled, setDisabled] = useState<boolean>(true);

  // const signInTest = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (doubleCheck) {
  //     if (
  //       passVerify({
  //         nickNameTest,
  //         nickname,
  //         emailTest,
  //         email,
  //         passwordTest,
  //         password,
  //         repassword,
  //         enterVerify,
  //         verifyNum,
  //         doubleCheck,
  //       })
  //     ) {
  //       await axios({
  //         method: 'post',
  //         url: Config.POST_DATA,
  //         data: {
  //           email: email,
  //           password: password,
  //           userName: nickname,
  //         },
  //       })
  //         .then(function (response) {
  //           if (response.status === 200) {
  //             alert('complete');
  //           }
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     } else {
  //       alert('입력 내용이 잘못됐습니다.');
  //     }
  //   }
  // };

  return (
    // <>
    //   <TextInput
    //     title={'회원가입'}
    //     placeholder={'내용'}
    //     event={emailVerifyActive}
    //   />
    //   <div className="signWrap">
    //     <div className="top">
    //       <p>회원가입</p>
    //     </div>
    //     <form id="signUp" onSubmit={signInTest}>
    //       <div
    //         className={`nickNameWrap ${current === 1 ? 'current' : ''}`}
    //         onClick={() => setCurrent(1)}
    //       >
    //         <label htmlFor="nickName">닉네임</label>
    //         <label
    //           className={`red ${nickname.length > 10 ? '' : 'hidden'}`}
    //           htmlFor="nickName"
    //         >
    //           닉네임이 10글자 이상입니다.
    //         </label>
    //         <input
    //           onChange={e => setNickname(e.target.value)}
    //           placeholder="10글자 이하의 닉네임이 좋아요."
    //           type="text"
    //           id="nickName"
    //           required
    //         />
    //       </div>
    //       <div
    //         className={`passwordWrap ${current === 2 ? 'current' : ''}`}
    //         onClick={() => setCurrent(2)}
    //       >
    //         <label htmlFor="password">비밀번호</label>
    //         <input
    //           onChange={e => setPassword(e.target.value)}
    //           type="password"
    //           id="password"
    //           required
    //         />
    //       </div>
    //       <div
    //         className={`rePasswordWrap ${current === 3 ? 'current' : ''}`}
    //         onClick={() => setCurrent(3)}
    //       >
    //         <label htmlFor="rePassword">비밀번호 확인</label>
    //         <input
    //           onChange={e => setRePassword(e.target.value)}
    //           type="password"
    //           id="rePassword"
    //           required
    //         />
    //       </div>
    //       <div
    //         className={`emailWrap ${current === 4 ? 'current' : ''}`}
    //         onClick={() => setCurrent(4)}
    //       >
    //         <label htmlFor="email">이메일을 입력해주세요</label>
    //         <input
    //           onChange={emailVerifyActive}
    //           type="email"
    //           id="email"
    //           required
    //         />
    //       </div>
    //       {/* {verifyNum ? (
    //         <button
    //           className={`verify ${enterVerify ? 'active' : 'not-verify'}`}
    //           disabled={passVerify() && false}
    //           type="submit"
    //           onClick={emailVerify}
    //         >
    //           {enterVerify ? '회원가입 하기' : '다음'}
    //         </button>
    //       ) : (
    //         <button
    //           className={`verify ${
    //             emailTest.test(email) ? 'active' : 'not-verify'
    //           }`}
    //           disabled={emailTest.test(email) && false}
    //           type="button"
    //           onClick={mailSend}
    //         >
    //           {emailTest.test(email) ? '인증메일 받기' : '다음'}
    //         </button>
    //       )} */}
    //     </form>
    //   </div>
    // </>
    <p>sdsad</p>
  );
};

export default SignUp;
