import { State } from './SignUpInterface';

const EMAIL = 'signUpStore/EMAIL';
const VERIFYSTATE = 'signUpStore/VERIFYSTATE';
const ENTERVERIFYSTATE = 'signUpStore/ENTERVERIFYSTATE';
const NICKNAME = 'signUpStore/NICKNAME';
const PASSWORD = 'signUpStore/PASSWORD';
const NEXT = 'signUpStore/NEXT';
const DOUBLE = 'signUpStore/DOUBLE';
const CLICKNUM = 'signUpStore/CLICKNUM';

export const email = (email: string) => ({ type: EMAIL, email });
export const veriftNum = (veriftState: string) => ({
  type: VERIFYSTATE,
  veriftState,
});
export const enterVerifyNum = (enterVerifyState: string) => ({
  type: ENTERVERIFYSTATE,
  enterVerifyState,
});
export const nickname = (nicknameState: string) => ({
  type: NICKNAME,
  nicknameState,
});
export const password = (passwordState: string) => ({
  type: PASSWORD,
  passwordState,
});
export const next = (next: boolean) => ({ type: NEXT, next });
export const double = (doubleState: boolean) => ({ type: DOUBLE, doubleState });
export const clickNum = () => ({ type: CLICKNUM });

export const initialState = {
  emailState: '',
  verifyState: '',
  enterVerifyState: '',
  nicknameState: '',
  passwordState: '',
  next: false,
  doubleState: false,
  clickNumState: 3,
};

export const reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case EMAIL:
      return {
        ...state,
        emailState: action.email,
      };
    case VERIFYSTATE:
      return {
        ...state,
        verifyState: action.veriftState,
      };
    case ENTERVERIFYSTATE:
      return {
        ...state,
        enterVerifyState: action.enterVerifyState,
      };
    case NICKNAME:
      return {
        ...state,
        nicknameState: action.nicknameState,
      };
    case PASSWORD:
      return {
        ...state,
        passwordState: action.passwordState,
      };
    case NEXT:
      return {
        ...state,
        next: true,
      };
    case DOUBLE:
      return {
        ...state,
        doubleState: true,
      };
    case CLICKNUM:
      return {
        ...state,
        clickNumState: state.clickNumState - 1,
      };
    default:
      return state;
  }
};
