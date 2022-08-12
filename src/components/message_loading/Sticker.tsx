import React, { useEffect, useReducer, useRef, useState } from 'react';
import { messageInitialState, messageReducer, move } from './messageStore';

const Sticker = ({ setMove, x, y, url, setPostX, setPostY }: any) => {
  const [leftLimit, setLeftLimit] = useState<number>(0);
  const [topLimit, setTopLimit] = useState<number>(0);
  // const [rightLimit, setRightLimit] = useState<number>(0);
  // const [bottomLimit, setBottomLimit] = useState<number>(0);
  // const [x, setX] = useState<number>(0);
  // const [move, setMove] = useState<boolean>(false);
  const wrapRef = useRef<any>();

  const [state, dispatch] = useReducer(messageReducer, messageInitialState);

  useEffect(() => {
    // 창 크기가 바뀔 때마다 현재 메인 컴포넌트의 왼쪽 위치 값과 위 위치 값을 가져옵니다
    setLeftLimit(wrapRef.current.parentElement.getBoundingClientRect().left);
    setTopLimit(wrapRef.current.parentElement.getBoundingClientRect().y);
    // setRightLimit(
    // wrapRef.current.parentElement.getBoundingClientRect().left +
    // wrapRef.current.offsetWidth
    // );
    // setBottomLimit(
    // wrapRef.current.parentElement.getBoundingClientRect().bottom
    // );
  }, [window.innerWidth, window.innerHeight]);

  return (
    <img
      src={`${process.env.PUBLIC_URL}/img/${url}.png`}
      style={{
        position: 'absolute',
        // 포지션 앱솔루트에 의해 빈 공간만큼 더 이동하는 걸 방지하기 위해 레프트, 탑 빼주고
        // 커서를 스티커 이미지의 정중앙으로 두기 위해 이미지의 절반만큼 빼줬습니다
        left: `${setPostX ? x - leftLimit - 95 / 2 : x}px`,
        top: `${setPostY ? y - topLimit - 95 / 2 : y}px`,
        zIndex: 60,
      }}
      // 클릭하고 있는 동안 움직일 수 있다
      onMouseDown={() => setPostX && setMove(true)}
      // 클릭 해제 시 움직임 x
      onMouseUp={() => {
        setMove(false);
        // 위에 올린 값과 동일하게 api에 보낼 값을 저장합니다
        setPostX(x - leftLimit - 95 / 2);
        setPostY(y - topLimit - 95 / 2);
      }}
      ref={wrapRef}
    />
  );
};
export default Sticker;
