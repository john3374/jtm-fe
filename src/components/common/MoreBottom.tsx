import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  messageDelete,
  messageFix,
  messageFixOrDelete,
} from '../message_loading/messageFunction';
import { More2 } from '../message_loading/messageInterface';

const BottomWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 0.6);
  z-index: 9;
`;

const BottomTap = styled.div`
  width: 375px;
  padding: 40px 28px 42px 28px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;

const Tap = styled.p`
  width: 100%;
  margin-bottom: 32px;
`;

const MoreBottom = ({ setMore, text, prev, messageId, fixText }: More2) => {
  const nav = useNavigate();
  return (
    <BottomWrap onClick={() => setMore(prev => !prev)}>
      <BottomTap>
        {text &&
          text.map((item: string, idx: number) => (
            <Tap
              onClick={async () => {
                if (item === '수정하기')
                  nav(`/message/fix/${messageId}/${prev}`);
                if (item === '삭제하기') messageDelete(1);
                // await messageFixOrDelete(item, messageId, fixText);
              }}
              key={idx}
            >
              {item}
            </Tap>
          ))}
      </BottomTap>
    </BottomWrap>
  );
};

export default MoreBottom;
