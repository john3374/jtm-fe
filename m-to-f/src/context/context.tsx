// import { DispatchType } from "@src/interfaces/IDispatch";
import { IState } from '@src/interfaces/ILogin';
import React, { ReactNode } from 'react';
import { createContext, useReducer } from 'react';
import { AuthReducer, LoginDispatch } from './reducer';

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정

const initialState: IState = {
  user: null,
  token: null,
  loading: false,
  errorMsg: null,
};

const AuthStateContext = createContext<IState>(initialState);
const AuthDispatchContext = createContext<LoginDispatch | null>(null);

// 토큰, 사용자 인증 정보를 저장
export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  console.log(context.user);
  if (context === undefined)
    throw new Error('useAuthState는 AuthProvider 안에서만 사용 가능합니다.');
  return context;
}

// 나중에 생성할 dispatch를 전달
export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  // console.log(context);
  if (context === undefined)
    throw new Error('useAuthDispatch는 AuthProvider 안에서만 사용 가능합니다.');
  return context;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
  // console.log(`user:`);
  console.dir(user.user);
  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
