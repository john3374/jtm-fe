import React, { useState } from 'react';
import BottomBtn from '../common/BottomBtn';
import { messagePost } from './messageFunction';
import './messageLoading.scss';

const MessageWrite = () => {
  const [message, setMessage] = useState<string>();
  const [textLength, setTextLength] = useState<number>(0);
  const [color, setColor] = useState<string>();

  return (
    <div className="message-loading">
      <div className="title">
        <p>마라님께</p>
        {/* 페이퍼쪽에서 유저네임 받아와야함 */}
        <p>한마디를 남겨주세요!</p>
      </div>
      <div className="message-wrap">
        <div className="write-box">
          <textarea
            maxLength={420}
            onChange={(e: any) => {
              setTextLength(e.target.value.length);
              setMessage(e.target.value);
            }}
          ></textarea>
          <span>{textLength}/420</span>
        </div>
      </div>
      <div className="message-color">
        <div className="one" onClick={e => setColor('#666')}></div>
        <div className="two" onClick={e => setColor('#666')}></div>
        <div className="thr" onClick={e => setColor('#666')}></div>
      </div>
      <BottomBtn
        onclick={(e: any) =>
          messagePost('jam@gmail.com', message, '굴림', color)
        }
        text="작성 완료"
      />
    </div>
  );
};

export default MessageWrite;
