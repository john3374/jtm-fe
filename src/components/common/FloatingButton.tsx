import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function FloatingButton() {
  return (
    <FloatingBtn>
      <FontAwesomeIcon icon={faPlus} />
    </FloatingBtn>
  );
}

const FloatingBtn = styled.div`
  position: fixed; //포인트!
  line-height: 0.3rem;
  bottom: 0.5rem;
  right: 30%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #111111;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default FloatingButton;
