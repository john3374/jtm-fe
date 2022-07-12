import React, { useState } from 'react';

const MessageInput = ({ send, setMessagePop }: any) => {
  const [text, setText] = useState<string>();
  return (
    <>
      <div>메세지를 입력합니다</div>
      <input type="text" onChange={(e: any) => setText(e.target.value)} />
      <p onClick={() => send(text, '굴림', '#111')}>전송</p>
      <p onClick={() => setMessagePop(false)}>닫기</p>
    </>
  );
};

export default MessageInput;
