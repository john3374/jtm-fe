import React from 'react';
import BottomBtn from '../common/BottomBtn';
import { TextInput } from '../common/TextInput';
import Header from '../layout/Header';

export const NamePaper = () => {
  return (
    <>
      <Header pageNm="롤링페이퍼 만들기" />
      <main>
        <TextInput
          title="롤링페이퍼의 이름을 정해주세요"
          htmlFor="paperNm"
          background="white"
          border="1px solid black"
        />
      </main>
      <BottomBtn text="다음" />
    </>
  );
};
