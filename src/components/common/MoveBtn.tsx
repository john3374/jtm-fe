import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IBtn } from './Btn';

const MoveBtn = ({ ...props }: IBtn) => {
  const link = props.link ? props.link : '';
  return (
    <StyledWrapper>
      <StyledLink to={link} color={props.color} onClick={props.onClick}>
        {props.text}
      </StyledLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  text-align: right;
  padding: 0 7%;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  font-size: 0.93rem;
  font-weight: bold;
  color: #666;
  border-bottom: 1px solid black;
`;

export { MoveBtn };
