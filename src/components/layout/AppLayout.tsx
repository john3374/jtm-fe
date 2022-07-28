import React from 'react';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AppLayout = () => {
  return (
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  max-width: 375px;
  height: 100vh;
  margin: auto;
  border: 1px solid lightgrey; // 경계 구분용
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: stretch;
  //@media screen and (min-height: 901px) {
  //  height: 900px;
  //}
`;

export default AppLayout;
