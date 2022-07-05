import React, { ChangeEvent, ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { IBtnStyle } from '../interface/IStyled';

interface ITextInput {
  title: string;
  placeholder?: string;
  htmlFor: string;
  value?: any;
  onChange?: any;
  disabled?: boolean;
  background?: string;
  border?: string;
  isPassword?: boolean;
}

/*
공통 텍스트 인풋 (로그인 등)
*/
const TextInput = (props: ITextInput) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={props.htmlFor}>{props.title}</StyledLabel>
      <StyledTextInput
        id={props.htmlFor}
        type={props?.isPassword ? 'password' : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
        {...props}
      />
    </Wrapper>
  );
};

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  margin: 15px 0;
`;

const StyledTextInput = styled.input<ITextInput>`
  padding: 0.8rem;
  font-size: 1.5rem;
  border: ${props => props.border || 'none'};
  background: ${props => props.background || 'lightgrey'};
  border-radius: 12px;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
`;

const Wrapper = styled.section`
  margin-bottom: 1rem;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 10%;
`;

export { TextInput };
