import React from 'react';

const MessageInput = ({ send, setMessagePop }: any) => {
  return (
    <>
      <div>메세지를 입력합니다</div>
      <p onClick={() => send('ssss', '굴림', '#111')}>전송</p>
      <p onClick={() => setMessagePop(false)}>닫기</p>
    </>
  );
};

export default MessageInput;
