import axios from 'axios';
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { Btn } from '../common/Btn';
import { messageInitialState, messageReducer } from './messageStore';

const StickerWrite = ({ setStickerPop, setSq }: any) => {
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

  const [state, dispatch] = useReducer(messageReducer, messageInitialState);
  // const context = useContext()

  // useEffect(() => {
  //   setLeftLimit(wrapRef.current.getBoundingClientRect().left);
  //   setRightLimit(
  //     wrapRef.current.getBoundingClientRect().left + wrapRef.current.offsetWidth
  //   );
  // }, [window.innerWidth, window.innerHeight]);
  //   375값 구함
  //   console.log(wrapRef.current.offsetWidth);

  //   이 둘 사이에서만 움직이게 해야함
  //   console.log(wrapRef.current.offsetParent.offsetLeft);
  //   console.log(wrapRef.current.offsetParent.offsetLeft + wrapRef.current.offsetWidth);

  //   console.log(window.innerWidth);

  // const q = document.querySelector('.sticker-wrap') as HTMLDivElement;

  //   console.log(q.clientWidth);

  // const qwe = async () => {
  // 스티커
  //   try {
  //     const q = await axios({
  //       method: 'post',
  //       url: '',
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
  //       url: '',
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
    <div className="message-loading">
      <p className="title">
        스티커를 골라주세요! <br />{' '}
        <span>스티커는 딱 하나만 붙일 수 있어요 :)</span>
      </p>
      <div className="message-wrap">
        <div className="sticker-wrap">
          <div
            style={{ backgroundColor: 'aqua', width: '50px', height: '50px' }}
          ></div>
          <Btn
            href="#"
            text=""
            background="red"
            onClick={e => {
              setStickerPop(false);
              setSq(true);
            }}
          ></Btn>
          <Btn
            link="/message"
            text=""
            background="aqua"
            onClick={(e: any) => setStickerPop(false)}
          ></Btn>
          <Btn link="/message" text=""></Btn>
          <Btn link="/message" text="" background="aqua"></Btn>
          <Btn link="/message" text="" background="aqua"></Btn>
        </div>
      </div>
    </div>
    // <div
    //   ref={wrapRef}
    //   className="sticker-wrap"
    //   style={{
    //     height: '500px',
    //     width: '100%',
    //     backgroundColor: 'aqua',
    //   }}
    //   onMouseMove={(e: React.MouseEvent) => {
    //     if (e.clientX > leftLimit && e.clientX < rightLimit) {
    //       console.log(e.clientX);
    //       setX(e.clientX);
    //     }
    //     // if(e.clientY)
    //   }}
    // >
    //   <p>스티커를 골라주세요</p>
    //   <div
    //     // onMouseMove={e => console.log(e.clientX)}
    //     style={{
    //       backgroundColor: 'red',
    //       width: '150px',
    //       height: '150px',
    //       position: 'fixed',
    //       left: `${x - leftLimit - 75}px`,
    //     }}
    //   ></div>
    // </div>
  );
};

export default StickerWrite;
