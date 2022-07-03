import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IBtnStyle } from '../interface/IStyled';

interface IHeader {
  pageNm: string;
  background?: string;
  color?: string;
  to: string; // router link
}

const Header = ({ ...props }: IHeader) => {
  return (
    <StyledHeader background={props.background} color={props.color}>
      <ArrowLink to={props.to}>
        <ArrowLeft />
      </ArrowLink>
      <p>{props.pageNm}</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<IBtnStyle>`
  padding: 1.5rem 0;
  color: ${props => props.color || 'initial'};
  background: ${props => props.background || 'initial'};
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  display: grid;
  width: 100%;
  grid-template-columns: 10% 80%;
`;

// react router dom link
const ArrowLink = styled(Link)`
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
