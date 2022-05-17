import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import BottomBtn from '../common/BottomBtn';
import Config from '../config/EnvConfig';
import './signUp.scss';

const SignUp = () => {
  const [current, setCurrent] = useState<number>(0);
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repassword, setRePassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [clickNum, setClickNum] = useState<number>(3);
  const [verifyNum, setVerifyNum] = useState<string>();
  const [enterVerify, setEnterVerify] = useState<string>('');
  const [doubleCheck, setDoubleCheck] = useState<boolean>(false);

  const [disabled, setDisabled] = useState<boolean>(true);

  const nickNameTest = /^[a-zA-Z0-9가-힣]{2,8}$/;
  const emailTest = /^[0-9a-zA-z-_.@]{10,40}$/;
  const passwordTest = /^(?=.*?[#?!@$%^&*-])[a-zA-Z0-9~!@#$%^&*()_-]{8,15}$/;

  const passVerify = () => {
    return (
      nickNameTest.test(nickname) &&
      emailTest.test(email) &&
      passwordTest.test(password) &&
      repassword === password &&
      enterVerify === verifyNum &&
      doubleCheck
    );
  };

  const emailVerifyActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (emailTest.test(e.target.value)) {
      setDisabled(false);
    }
  };

  const signInTest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (doubleCheck) {
      if (passVerify()) {
        await axios({
          method: 'post',
          url: Config.POST_DATA,
          data: {
            email: email,
            password: password,
            userName: nickname,
          },
        })
          .then(function (response) {
            if (response.status === 200) {
              alert('complete');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert('입력 내용이 잘못됐습니다.');
      }
    }
  };

  const mailSend = async (): Promise<void> => {
    try {
      if (clickNum <= 0) {
        return alert('인증 한도를 초과했습니다');
      } else {
        setClickNum(prev => prev - 1);
        alert(
          `인증 번호가 메일로 발송되었습니다. 메일 발송 가능 횟수 : ${clickNum}`
        );
        const codeSend = await axios({
          url: Config.VERIFY_MAIL,
          params: {
            email: email,
          },
        });
        setVerifyNum(codeSend.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const emailVerify = async (): Promise<void> => {
    try {
      const getDouble: AxiosResponse<object[]> = await axios({
        url: Config.DOUBLE_CHECK,
        method: 'get',
        params: {
          email: email,
        },
      });
      setDoubleCheck(true);
    } catch (e) {
      console.log(e);
      setDoubleCheck(false);
      alert('이미 가입되어 있는 메일입니다.');
    }
  };

  return (
    <>
      <div className="signWrap">
        <div className="top">
          <p>회원가입</p>
        </div>
        <form id="signUp" onSubmit={signInTest}>
          <div
            className={`nickNameWrap ${current === 1 ? 'current' : ''}`}
            onClick={() => setCurrent(1)}
          >
            <label htmlFor="nickName">닉네임</label>
            <label
              className={`red ${nickname.length > 10 ? '' : 'hidden'}`}
              htmlFor="nickName"
            >
              닉네임이 10글자 이상입니다.
            </label>
            <input
              onChange={e => setNickname(e.target.value)}
              placeholder="10글자 이하의 닉네임이 좋아요."
              type="text"
              id="nickName"
              required
            />
          </div>
          <div
            className={`passwordWrap ${current === 2 ? 'current' : ''}`}
            onClick={() => setCurrent(2)}
          >
            <label htmlFor="password">비밀번호</label>
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />
          </div>
          <div
            className={`rePasswordWrap ${current === 3 ? 'current' : ''}`}
            onClick={() => setCurrent(3)}
          >
            <label htmlFor="rePassword">비밀번호 확인</label>
            <input
              onChange={e => setRePassword(e.target.value)}
              type="password"
              id="rePassword"
              required
            />
          </div>
          <div
            className={`emailWrap ${current === 4 ? 'current' : ''}`}
            onClick={() => setCurrent(4)}
          >
            <label htmlFor="email">이메일을 입력해주세요</label>
            <input
              onChange={emailVerifyActive}
              type="email"
              id="email"
              required
            />
          </div>
          <div
            className={`emailVerifyWrap ${current === 5 ? 'current' : ''} ${
              verifyNum ? '' : 'hidden'
            }`}
            onClick={() => setCurrent(5)}
          >
            <label htmlFor="emailerify">인증번호를 입력해주세요</label>
            <input
              onChange={e => setEnterVerify(e.target.value)}
              type="text"
              id="emailerify"
              required
            />
          </div>
          {verifyNum ? (
            <button
              className={`verify ${enterVerify ? 'active' : 'not-verify'}`}
              disabled={passVerify() && false}
              type="submit"
              onClick={emailVerify}
            >
              {enterVerify ? '회원가입 하기' : '다음'}
            </button>
          ) : (
            <button
              className={`verify ${
                emailTest.test(email) ? 'active' : 'not-verify'
              }`}
              disabled={emailTest.test(email) && false}
              type="button"
              onClick={mailSend}
            >
              {emailTest.test(email) ? '인증메일 받기' : '다음'}
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;
