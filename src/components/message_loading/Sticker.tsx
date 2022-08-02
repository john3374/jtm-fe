import React, { useEffect, useRef, useState } from 'react';

const Sticker = () => {
  const [leftLimit, setLeftLimit] = useState<number>(0);
  const [rightLimit, setRightLimit] = useState<number>(0);
  const [topLimit, setTopLimit] = useState<number>(0);
  const [bottomLimit, setBottomLimit] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  const wrapRef = useRef<any>();

  console.log(wrapRef.current.parentElement);

  //   useEffect(() => {
  //     setLeftLimit(wrapRef.current.parentElement.getBoundingClientRect().left);
  //     setRightLimit(
  //       wrapRef.current.parentElement.getBoundingClientRect().left +
  //         wrapRef.current.offsetWidth
  //     );
  //   }, [window.innerWidth, window.innerHeight]);
  return <div ref={wrapRef}>스티커입니다</div>;
};
export default Sticker;
