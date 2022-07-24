import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface IBottomBtn {
  text: string;
  disabled?: boolean;
  onclick?: any;
  fixed?: string;
}

interface IBtnStyle {
  fixed?: string;
  disabled?: boolean;
}

const BottomBtn = ({ text, onclick, disabled, fixed }: IBottomBtn) => {
  return (
    <StyledBtn onClick={onclick} disabled={disabled} fixed={fixed}>
      {text}
    </StyledBtn>
  );
};

const StyledBtn = styled.button<IBtnStyle>`
  border: none;
  width: 100%;
  background: ${props => (props.disabled ? 'darkgray' : 'black')};
  padding: 1rem 0;
  margin-top: 0.5rem;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  position: ${props => (props.fixed ? 'fixed' : 'unset')};
  ${props => (props.fixed ? 'width : 343px' : '')};
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  // validation 통과한 경우에만 hover
  ${props => (props.disabled ? '' : '&:hover { background: red }')}
  border-radius: 12px;
`;

export default BottomBtn;
