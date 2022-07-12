import React, { useRef, useState } from 'react';

const StickerPop = ({ setStickerPop }: any) => {
  //   const mouseMove = (e: any) => {
  //     console.log(e.clientX);
  //   };
  //   addEventListener('mousemove', mouseMove);
  const [x, setX] = useState<number>(0);
  const wrapRef = useRef<any>();
  const a = wrapRef.current.offsetParent.offsetLeft;
  const b =
    wrapRef.current.offsetParent.offsetLeft + wrapRef.current.offsetWidth;
  //   375값 구함
  //   console.log(wrapRef.current.offsetWidth);

  //   이 둘 사이에서만 움직이게 해야함
  //   console.log(wrapRef.current.offsetParent.offsetLeft);
  //   console.log(wrapRef.current.offsetParent.offsetLeft + wrapRef.current.offsetWidth);

  //   console.log(window.innerWidth);

  const q = document.querySelector('.sticker-wrap') as HTMLDivElement;

  //   console.log(q.clientWidth);

  return (
    <div
      ref={wrapRef}
      className="sticker-wrap"
      style={{ height: '500px', width: '100%' }}
      onMouseMove={(e: React.MouseEvent) => {
        if (e.clientX > a && e.clientX < b) {
          setX(e.clientX);
          console.log(e.clientX);
        }
      }}
    >
      <p>스티커를 골라주세요</p>
    </div>
  );
};

export default StickerPop;
