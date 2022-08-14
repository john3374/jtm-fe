import React, { useState } from 'react';
import BottomBtn from '../common/BottomBtn';
import { messagePost } from './messageFunction';
import { themeColor, themeInput, themeMessageColor } from './messageData';
import './messageLoading.scss';
import styled from 'styled-components';
import { Color } from './messageInterface';
import { useAuthState } from 'src/context';
import { useParams } from 'react-router-dom';
import { MessageLoadingComponent } from './MessageLoading';

const ColorBox = styled.div<Color>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${props => (props.color ? `${props.color}` : 'unset')};
`;

const MessageWrite = () => {
  const [message, setMessage] = useState<string>();
  const [textLength, setTextLength] = useState<number>(0);
  const [color, setColor] = useState<string>();
  const { user, token } = useAuthState();
  const email = user?.email;
  const { paperId, paperSkin } = useParams();

  const writeData = Object.values(themeMessageColor[Number(paperSkin) - 1]);

  // console.log();

  return (
    <MessageLoadingComponent
      full={true}
      theme={themeColor[Number(paperSkin) - 1]}
    >
      <div className="title">
        <p>마라님께</p>
        {/* 페이퍼쪽에서 유저네임 받아와야함 */}
        <p>한마디를 남겨주세요!</p>
      </div>
      <div className="message-wrap">
        <div className="write-box">
          <InputBox
            maxLength={420}
            color={themeInput[Number(paperSkin) - 1]}
            onChange={(e: any) => {
              setTextLength(e.target.value.length);
              setMessage(e.target.value);
            }}
          ></InputBox>
          <span>{textLength}/420</span>
        </div>
      </div>
      <div className="message-color">
        {
          <>
            {writeData[0].map((item: any) => (
              <ColorBox
                key={item}
                onClick={() => setColor(item)}
                color={item}
              />
            ))}
          </>
        }
      </div>
      <BottomBtn
        onclick={() => messagePost(email!, message, '굴림', color, paperId!)}
        text="작성 완료"
      />
    </MessageLoadingComponent>
  );
};

const InputBox = styled.textarea`
  width: 327px;
  height: 300px;
  border-radius: 12px;
  border: none;
  background-color: ${props => (props.color ? props.color : '#fff')};
  padding: 24px;
  box-sizing: border-box;
  resize: none;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
`;

export default MessageWrite;
