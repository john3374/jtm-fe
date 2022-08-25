import React, { ChangeEvent, useState } from 'react';
import BottomBtn from '../common/BottomBtn';
import { messagePost } from './messageFunction';
import { themeMessageColor } from './messageData';
import './messageLoading.scss';
import styled from 'styled-components';
import { Color } from './messageInterface';
import { useAuthState } from 'src/context';
import { useParams } from 'react-router-dom';

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
  const userId = user?.userId;
  const { paperId } = useParams();

  return (
    <div className="message-loading full">
      <div className="title">
        <p>마라님께</p>
        {/* 페이퍼쪽에서 유저네임 받아와야함 */}
        <p>한마디를 남겨주세요!</p>
      </div>
      <div className="message-wrap">
        <div className="write-box">
          <textarea
            maxLength={420}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setTextLength(e.target.value.length);
              setMessage(e.target.value);
            }}
          ></textarea>
          <span>{textLength}/420</span>
        </div>
      </div>
      <div className="message-color">
        {
          <>
            {themeMessageColor.map((item: any) => {
              if (item.congratulations) {
                return item.congratulations.map((item: any) => (
                  <ColorBox onClick={() => setColor(item)} color={item} />
                ));
              }
            })}
          </>
        }
      </div>
      <BottomBtn
        onclick={(e: any) =>
          messagePost(userId!, message || '', '굴림', color || '', paperId!)
        }
        text="작성 완료"
      />
    </div>
  );
};

export default MessageWrite;
