export interface User {
  email: string;
  veriftNum: string;
  nickname: string;
  password: string;
}

export interface Verify {
  nickNameTest: RegExp;
  nickname: string;
  emailTest: RegExp;
  email: string;
  passwordTest: RegExp;
  password: string;
  repassword: string;
  enterVerify: string;
  verifyNum: string;
  doubleCheck: boolean;
}

export interface CurrentNum {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}
