import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const StickerPop = ({ setStickerPop }: any) => {
  //   const mouseMove = (e: any) => {
  //     console.log(e.clientX);
  //   };
  //   addEventListener('mousemove', mouseMove);
  const [leftLimit, setLeftLimit] = useState<number>(0);
  const [rightLimit, setRightLimit] = useState<number>(0);
  const [topLimit, setTopLimit] = useState<number>(0);
  const [bottomLimit, setBottomLimit] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  const wrapRef = useRef<any>();
  useEffect(() => {
    setLeftLimit(wrapRef.current.offsetParent.offsetLeft);
    setRightLimit(
      wrapRef.current.offsetParent.offsetLeft + wrapRef.current.offsetWidth
    );
  }, [window.innerWidth, window.innerHeight]);
  //   375값 구함
  //   console.log(wrapRef.current.offsetWidth);

  //   이 둘 사이에서만 움직이게 해야함
  //   console.log(wrapRef.current.offsetParent.offsetLeft);
  //   console.log(wrapRef.current.offsetParent.offsetLeft + wrapRef.current.offsetWidth);

  //   console.log(window.innerWidth);

  const q = document.querySelector('.sticker-wrap') as HTMLDivElement;

  //   console.log(q.clientWidth);

  // const qwe = async () => {
  //   try {
  //     const q = await axios({
  //       method: 'post',
  //       url: 'http://3.39.162.248:80/sticker',
  //       data: {
  //         user: {
  //           email: 'haeun@gmail.com',
  //         },
  //         paper: {
  //           paperId: 6005,
  //         },
  //         sticker: {
  //           positionX: '200',
  //           positionY: '200',
  //           kind: 3,
  //         },
  //       },
  //     });
  //     console.log(q);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // qwe();

  // 페이퍼정보
  // const paperGet = async () => {
  //   try {
  //     const a = await axios({
  //       method: 'get',
  //       url: 'http://3.39.162.248:80/paper',
  //       headers: {
  //         ['User-Email']: 'jam@gmail.com',
  //       },
  //     });
  //     console.log(a);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // paperGet();

  return (
    <div
      ref={wrapRef}
      className="sticker-wrap"
      style={{
        height: '500px',
        width: '100%',
        backgroundColor: 'aqua',
      }}
      onMouseMove={(e: React.MouseEvent) => {
        if (e.clientX > leftLimit && e.clientX < rightLimit) {
          console.log(e.clientX);
          setX(e.clientX);
        }
        // if(e.clientY)
      }}
    >
      <p>스티커를 골라주세요</p>
      <div
        onMouseMove={e => console.log(e.clientX)}
        style={{
          backgroundColor: 'red',
          width: '150px',
          height: '150px',
          position: 'fixed',
          left: `${x > rightLimit - 150 ? rightLimit - 150 : x}px`,
        }}
      ></div>
    </div>
  );
};

export default StickerPop;
