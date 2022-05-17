import React from 'react';
import styled from 'styled-components';

interface IMove {
  text: string;
}
const MoveBtn = ({ text }: IMove) => {
  return (
    <StyledWrapper>
      <StyledLink>{text}</StyledLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  margin: 1rem 0.5rem;
  text-align: right;
`;

const StyledLink = styled.a`
  font-weight: bold;
  border-bottom: 2px solid black;
  padding-bottom: 0.75rem;
  &:after {
    content: '→';
    font-size: 1.2rem;
    display: relative;

    margin-left: 1rem;
  }
`;

export { MoveBtn };
