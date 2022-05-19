import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import EnvConfig from '../config/EnvConfig';
import { CurrentNum } from './SignUpInterface';

const [email, setEmail] = useState<string>('');
const [clickNum, setClickNum] = useState<number>(3);
const [verifyNum, setVerifyNum] = useState<string>('');
const [enterVerify, setEnterVerify] = useState<string>('');
const [doubleCheck, setDoubleCheck] = useState<boolean>(false);

export const emailVerifyActive = (e: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
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
        url: EnvConfig.VERIFY_MAIL,
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
      url: EnvConfig.DOUBLE_CHECK,
      method: 'get',
      params: {
        email: email,
      },
    });
    if (getDouble) {
      setDoubleCheck(true);
    }
  } catch (e) {
    console.log(e);
    setDoubleCheck(false);
    alert('이미 가입되어 있는 메일입니다.');
  }
};

export const SignUpEmail = ({ current, setCurrent }: CurrentNum) => {
  return (
    <>
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
          id="emailverify"
          required
        />
      </div>
    </>
  );
};
