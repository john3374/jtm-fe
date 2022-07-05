import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface IBottomBtn {
  text: string;
  disabled?: boolean;
  onclick?: any;
}

const BottomBtn = ({ text, onclick, disabled }: IBottomBtn) => {
  return (
    <StyledBtn onClick={onclick} disabled={disabled}>
      {text}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  border: none;
  width: 100%;
  background: ${props => (props.disabled ? 'darkgray' : 'black')};
  padding: 1rem 0;
  margin-top: 0.5rem;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  // position: fixed;
  bottom: 0;
  // validation 통과한 경우에만 hover
  ${props => (props.disabled ? '' : '&:hover { background: red }')}
`;

export default BottomBtn;
