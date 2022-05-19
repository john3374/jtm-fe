import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface ITextInput {
  title: string;
  placeholder?: string;
  event?: ChangeEventHandler<HTMLInputElement>;
}

/*
공통 텍스트 인풋 (로그인 등)
*/
const TextInput = ({ title, placeholder, event }: ITextInput) => {
  return (
    <Wrapper>
      <StyledLabel>{title}</StyledLabel>
      <StyledTextInput
        onChange={event && event}
        type="text"
        placeholder={placeholder ? placeholder : ''}
      />
    </Wrapper>
  );
};

const StyledLabel = styled.label`
  font-size: 1.3rem;
  font-weight: bold;
  display: block;
  margin: 10px;
`;

const StyledTextInput = styled.input`
  padding: 0.8rem;
  font-size: 1.5rem;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
`;

const Wrapper = styled.section`
  margin-bottom: 1rem;
`;

export { TextInput };
