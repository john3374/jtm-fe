import React from 'react';
import styled from 'styled-components';

const More = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Dot = styled.div`
  width: 15x;
  height: 15px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MoreBtn = () => {
  return (
    <More>
      <Dot />
      <Dot />
      <Dot />
    </More>
  );
};

export default MoreBtn;
