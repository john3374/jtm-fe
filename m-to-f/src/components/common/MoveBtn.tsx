import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IBtn } from './Btn';

const MoveBtn = ({ ...props }: IBtn) => {
  const link = props.link ? props.link : '';
  return (
    <StyledWrapper>
      <StyledLink to={link} color={props.color}>
        {props.text}
      </StyledLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  // margin: 1rem 0.5rem;
  text-align: right;
  padding: 0 10%;
`;

const StyledLink = styled(Link)`
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
