import { NavigateFunction } from 'react-router-dom';

export interface Base {
  email: string;
  password: string;
  nickname: string;
}

export interface User extends Base {
  veriftNum: string;
  enterVerifyNum: string;
  next: boolean;
  double: boolean;
  clickNum: number;
}

export interface State {
  doubleState: boolean;
  clickNumState: number;
  emailState: string;
  nicknameState: string;
  passwordState: string;
  enterVerifyState: string;
  verifyState: string;
  nicknamePass: boolean;
}

export interface FirstVerify {
  nickNameTest: RegExp;
  nicknameState: string;
  nicknamePass: boolean;
  passwordTest: RegExp;
  passwordState: string;
  rePassword: string;
  emailTest: RegExp;
  emailState: string;
  enterVerifyState: string;
  verifyState: string;
  doubleState: boolean;
}
export interface SecondVerify extends FirstVerify {
  nav: NavigateFunction;
}

export type SignUpEmailInter = Omit<State, 'nicknamePass'> & {
  dispatch: React.Dispatch<any>;
};
