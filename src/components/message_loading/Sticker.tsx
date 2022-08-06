import React, { useEffect, useReducer, useRef, useState } from 'react';
import { messageInitialState, messageReducer, move } from './messageStore';

const Sticker = ({ setMove, x, y }: any) => {
  const [leftLimit, setLeftLimit] = useState<number>(0);
  const [rightLimit, setRightLimit] = useState<number>(0);
  const [topLimit, setTopLimit] = useState<number>(0);
  const [bottomLimit, setBottomLimit] = useState<number>(0);
  // const [x, setX] = useState<number>(0);
  // const [move, setMove] = useState<boolean>(false);
  const wrapRef = useRef<any>();

  const [state, dispatch] = useReducer(messageReducer, messageInitialState);

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    setLeftLimit(wrapRef.current.parentElement.getBoundingClientRect().left);
    setRightLimit(
      wrapRef.current.parentElement.getBoundingClientRect().left +
        wrapRef.current.offsetWidth
    );
  }, [window.innerWidth, window.innerHeight]);
  return (
    <img
      src={`${process.env.PUBLIC_URL}/img/smile.png`}
      style={{
        width: 50,
        height: 50,
        position: 'absolute',
        left: `${x - leftLimit - 25}px`,
        top: `${y - 25}px`,
      }}
      onMouseDown={() => setMove(true)}
      onMouseUp={() => setMove(false)}
      ref={wrapRef}
    />
  );
};
export default Sticker;
