import React, { useState } from 'react';
import styled from 'styled-components';
import MoreBottom from './MoreBottom';

const More = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  cursor: pointer;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MoreBtn = () => {
  const [more, setMore] = useState<boolean>(false);
  return (
    <>
      <More onClick={() => setMore(prev => !prev)}>
        <Dot />
        <Dot />
        <Dot />
      </More>
      {more && <MoreBottom setMore={setMore} text={['수정하기', '삭제하기']} />}
    </>
  );
};

export default MoreBtn;
