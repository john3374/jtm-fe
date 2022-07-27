import React from 'react';
import styled from 'styled-components';

const More = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: space-between;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 3px;
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
