import React from 'react';
import Header from '../layout/Header';
import styled from 'styled-components';

function MainFormat() {
  return (
    <ComponentStyle>
      <AddHeaderStyle>
        <Header pageNm="숨니의 생일을 축하해요!" />
      </AddHeaderStyle>
    </ComponentStyle>
  );
}

const ComponentStyle = styled.div`
  background-color: #ffef9d;
`;

const AddHeaderStyle = styled.div`
  height: 5vh;
  padding-top: 0.6rem;
`;

export default MainFormat;
