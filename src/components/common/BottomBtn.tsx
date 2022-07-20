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
  width: 85%;
  bottom: 0;

  border: none;
  border-radius: 12px;

  margin: 1.25rem;
  padding: 1rem 0;

  background: ${props => (props.disabled ? 'darkgray' : 'black')};
  color: white;
  font-size: 1.2rem;
  text-align: center;

  // validation 통과한 경우에만 hover
  ${props => (props.disabled ? '' : '&:hover { background: red }')}
`;

export default BottomBtn;
