import { User } from './SignUpInterface';

const EMAIL = 'signUpStore/EMAIL';
const VERIFYNUM = 'signUpStore/VERIFYNUM';
const NICKNAME = 'signUpStore/NICKNAME';
const PASSWORD = 'signUpStore/PASSWORD';

export const email = (email: string) => ({ type: EMAIL, email });
export const veriftNum = (num: string) => ({ type: VERIFYNUM, num });
export const nickname = (nickname: string) => ({ type: NICKNAME, nickname });
export const password = (password: string) => ({ type: PASSWORD, password });

export const initialState = {
  email: '',
  veriftNum: '',
  nickname: '',
  password: '',
};

export const reducer = (state: User = initialState, action: any) => {
  switch (action.type) {
    case EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case VERIFYNUM:
      return action.num;
    case NICKNAME:
      return action.nickname;
    case PASSWORD:
      return action.password;
    default:
      return state;
  }
};
