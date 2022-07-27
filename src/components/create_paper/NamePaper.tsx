import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomBtn from '../common/BottomBtn';
import { TextInput } from '../common/TextInput';
import Header from '../layout/Header';

export const NamePaper = () => {
  const [title, setTitle] = useState();
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/createPaper/selectTheme');
  };
  return (
    <>
      <Header pageNm="롤링페이퍼 만들기" to="/createPaper" />
      <main>
        <TextInput
          title="롤링페이퍼의 제목을 정해주세요"
          htmlFor="paperNm"
          background="white"
          border="1px solid black"
          onChange={(e: any) => setTitle(e.target.value)}
        />
      </main>
      <Link to={`/createPaper/selectTheme${title}`}>
        <BottomBtn onclick={onClick} text="다음" />
      </Link>
    </>
  );
};
