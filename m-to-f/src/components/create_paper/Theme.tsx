import React from 'react';
import Header from '../layout/Header';
import BottomBtn from '../common/BottomBtn';
import styled from 'styled-components';

function Theme() {
  const theme = ['love', 'friendship', 'celebration', 'simple'];

  return (
    <>
      <Header pageNm="롤링페이퍼 만들기" />
      <ComponentStyle>
        {theme.map(value => (
          <ItemStyle>{value}</ItemStyle>
        ))}
      </ComponentStyle>
      <BottomBtn text="다음" />
    </>
  );
}

const ComponentStyle = styled.div`
  margin-top: 1.3rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ItemStyle = styled.div`
  margin-bottom: 1rem;
  word-break: break-all;
  text-align: center;
  background-color: gainsboro;
  border: 2px solid black;
  width: 7vw;
  height: 30vh;
`;

export default Theme;
