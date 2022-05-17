import React from 'react';
import styled from 'styled-components';

interface IBottomBtn {
  text: string;
  href: string;
}

const BottomBtn = ({ text, href }: IBottomBtn) => {
  return (
    <StyledBottomBtnWrapper>
      <StyledText href={href}>{text}</StyledText>
    </StyledBottomBtnWrapper>
  );
};

const StyledBottomBtnWrapper = styled.section`
  width: 100%;
  background: black;
  padding: 1rem 0;
  margin-top: 1rem;
  text-align: center;
`;

const StyledText = styled.a`
  color: white;
  font-size: 1.2rem;
`;

export default BottomBtn;
