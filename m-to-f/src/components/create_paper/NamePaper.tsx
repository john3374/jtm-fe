import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomBtn from '../common/BottomBtn';
import { TextInput } from '../common/TextInput';
import Header from '../layout/Header';

export const NamePaper = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/createPaper/selectTheme');
  };
  return (
    <>
      <Header pageNm="롤링페이퍼 만들기" />
      <main>
        <TextInput
          title="롤링페이퍼의 제목을 정해주세요"
          htmlFor="paperNm"
          background="white"
          border="1px solid black"
        />
      </main>
      <BottomBtn onclick={onClick} text="다음" />
    </>
  );
};
