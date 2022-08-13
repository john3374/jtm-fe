import React, { useState } from 'react';

const Setting = () => {
  const [fix, setFix] = useState<boolean>(false);
  return (
    <>
      <p onClick={() => setFix(true)}>프로필 수정</p>
      <p>로그아웃</p>
      <p>탈퇴하기</p>
      {/* {fix && <form></form>} */}
    </>
  );
};

export default Setting;
