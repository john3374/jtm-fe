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
  border-radius: 12px;
  width: 343px;
  background: black;
  padding: 1rem 0;
  margin-top: 0.5rem;
  margin-left: 16px;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  position: fixed;
  bottom: 34px;
`;

export default BottomBtn;
