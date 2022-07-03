import React from 'react';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <>
      <main>
        <StyledContainer>
          <h4 style={{ textAlign: 'center', marginTop: '3rem' }}>
            로딩중, 잠시만 기다려주세요.
          </h4>
        </StyledContainer>
      </main>
    </>
  );
};

const StyledContainer = styled.div`
  max-width: 375px;
  height: 100vh;
  margin: auto;
  border: 1px solid lightgrey; // 경계 구분용
`;
