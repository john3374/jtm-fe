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
  next: boolean;
}

export interface FirstVerify {
  nickNameTest: RegExp;
  nicknameState: string;
  passwordTest: RegExp;
  passwordState: string;
  repassword: string;
  dispatch: React.Dispatch<any>;
}
export type SecondVerify = Omit<State, 'clickNumState' | 'next'> & {
  emailTest: RegExp;
};

export type SignUpEmailInter = Omit<State, 'next'> & {
  dispatch: React.Dispatch<any>;
};
