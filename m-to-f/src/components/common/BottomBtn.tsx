import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface IBottomBtn {
  text: string;
  onclick?: any;
}

const BottomBtn = ({ text, onclick }: IBottomBtn) => {
  return <StyledBtn onClick={onclick}>{text}</StyledBtn>;
};

const StyledBtn = styled.button`
  border: none;
  width: 100%;
  background: black;
  padding: 1rem 0;
  margin-top: 0.5rem;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  // position: fixed;
  bottom: 0;
`;

export default BottomBtn;
