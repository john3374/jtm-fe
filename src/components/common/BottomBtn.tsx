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

<<<<<<< HEAD
const StyledBtn = styled.button<IBtnStyle>`
=======
const StyledBtn = styled.button`
  width: 85%;
  bottom: 0;

>>>>>>> main
  border: none;
  border-radius: 12px;

  margin: 1.25rem;
  padding: 1rem 0;

  background: ${props => (props.disabled ? 'darkgray' : 'black')};
  color: white;
  font-size: 1.2rem;
<<<<<<< HEAD
  position: ${props => (props.fixed ? 'fixed' : 'unset')};
  ${props => (props.fixed ? 'width : 343px' : '')};
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
=======
  text-align: center;

>>>>>>> main
  // validation 통과한 경우에만 hover
  ${props => (props.disabled ? '' : '&:hover { background: red }')}
  border-radius: 12px;
`;

export default BottomBtn;
