import React from 'react';
import styled from 'styled-components';
import { IBtnStyle } from '../interface/IStyled';

interface IHeader {
  pageNm: string;
  background?: string;
  color?: string;
}

const Header = ({ ...props }: IHeader) => {
  return (
    <StyledHeader background={props.background} color={props.color}>
      <ArrowA>
        <ArrowLeft />
      </ArrowA>
      <p>{props.pageNm}</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<IBtnStyle>`
  padding: 1rem;
  color: ${props => props.color || 'initial'};
  background: ${props => props.background || 'initial'};
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 10% 80%;
`;

const ArrowA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowLeft = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export default Header;
