import { IState as IState, IUser } from '@src/interfaces/ILogin';
import { Dispatch } from 'react';

// localStorage 저장해둔게 있나 확인
// const currentUser: any = localStorage.getItem('currentUser');
// console.log(currentUser);

// const user = currentUser ? JSON.parse(currentUser).user : null;
// const token = currentUser ? JSON.parse(currentUser).token : null;

// console.log(user, token);

export type LoginAction =
  | { type: 'REQUEST_LOGIN'; loading: boolean }
  | {
      type: 'LOGIN_SUCCESS';
      payload: any;
      // username: string;
      // user: string;
      // loading: boolean;
    }
  | { type: 'LOGOUT'; user: string }
  | { type: 'LOGIN_ERROR'; loading: boolean; error: any };

// 위 타입 전용 디스패치
export type LoginDispatch = Dispatch<LoginAction>;

export const AuthReducer = (initialState: IState, action: LoginAction) => {
  console.log(action);
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      // 일부러 서버 측과 key 이름 다르게
      return {
        ...initialState,
        user: action.payload,
        token: action.payload.idToken, // authNum?
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        user: null,
        token: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMsg: action.error,
      };
    default:
      return {
        ...initialState,
      };
    // throw new Error(`액션 타입 이건 뭔가요: ${action}`);
  }
};
