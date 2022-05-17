import React from 'react';
import styled from 'styled-components';

interface IHeader {
  pageNm: string;
}

const Header = ({ pageNm }: IHeader) => {
  return <StyledHeader>{pageNm}</StyledHeader>;
};

const StyledHeader = styled.header`
  &:before {
    content: '＜';
    font-size: 1.5rem;
    position: absolute;
    left: 10px;
    top: 10px;
  }
  padding: 1rem;
  background: #fdc0d2;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
`;

export default Header;
