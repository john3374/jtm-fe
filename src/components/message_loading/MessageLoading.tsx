import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
// import { Btn } from '../common/Btn';
import './messageLoading.scss';
import Header from '../layout/Header';
import { Btn } from '../common/Btn';
import MessageInput from './MessageInput';
import {
  message,
  messageInitialState,
  messageReducer,
  x,
} from './messageStore';
import StickerPop from './StickerWrite';
import MoreBtn from '../common/MoreBtn';
import EnvConfig from '../../config/EnvConfig';
import { Loading, Message } from './messageInterface';
import {
  messageDelete,
  messageFix,
  messageGet,
  paperDetail,
  stickerPost,
} from './messageFunction';
import { useParams } from 'react-router-dom';
import StickerWrite from './StickerWrite';
import Sticker from './Sticker';
import BottomBtn from '../common/BottomBtn';

// 회원가입에서 인증번호 useState 말고 유저단에 안 보여줄 방법 찾아봐야
// 모바일 버전 스티커 가능하게 따로 만들어야 할 듯

const MessageLoading = ({ messageData }: any) => {
  const [messagePop, setMessagePop] = useState<boolean>(false);
  const [stickerPop, setStickerPop] = useState<boolean>(false);
  const [fixPop, setFixPop] = useState<boolean>(false);
  const [state, dispatch] = useReducer(messageReducer, messageInitialState);
  const [st, setSt] = useState<string>();

  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();
  const [move, setMove] = useState<boolean>(false);

  const { on } = useParams();
  const messageList = state.message;
  const stickerList = state.sticker;
  useEffect(() => {
    // messageGet(dispatch, message);
    paperDetail(dispatch);
  }, []);

  const reactionAmount = async () => {
    const a = await axios({
      url: `${EnvConfig.LANTO_SERVER}reaction/${1}`,
      method: 'get',
    });
    console.log(a);
  };

  const paperName = '숨니의 생일을 축하해요!';
  // ${props =>
  // props.backColor ? props.backColor : '#ffbba6'};
  const Message = styled.div<Loading>`
    width: ${props => (props.width ? props.width : '327px')};
    /* background-color: #ffbba6; */
    background-color: ${props =>
      props.backColor ? props.backColor : '#ffbba6'};
    font-family: ${props => (props.font ? props.font : 'sans-serif')};
    border-radius: 12px;
    padding: 16px 16px 20px 16px;
    /* box-sizing: border-box; */
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    align-self: ${props => props.left && props.width && props.left};
    p {
      font-size: 13px;
      line-height: 24px;
    }
    p:first-child {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 7px;
    }
    p:nth-child(2) {
      margin-bottom: 13px;
    }
  `;

  return (
    <div
      className="message-loading"
      onMouseMove={e => {
        move && setX(e.clientX);
        move && setY(e.clientY);
      }}
    >
      {/* {stickerOn && <Sticker />} */}
      {/* {messagePop && (
        <MessageInput send={messagePost} setMessagePop={setMessagePop} />
      )} */}
      {stickerPop ? (
        <>
          {/* <Header to="/message" pageNm={''} /> */}
          <StickerWrite setStickerPop={setStickerPop} setSt={setSt} />
        </>
      ) : (
        <>
          {st && (
            <Sticker
              url={st}
              setMove={setMove}
              x={x}
              y={y}
              setX={setX}
              setY={setY}
            />
          )}
          <Header to="/" pageNm={paperName} />
          <div className="message-wrap">
            {messageList[0] ? (
              messageList.map((item: Message, idx: number) => {
                // console.log(item);
                return (
                  <Message
                    key={idx}
                    backColor={item.color}
                    font={item.font}
                    width={item.content.length <= 84 ? '234px' : ''}
                    left={(idx + 1) % 2 !== 0 ? 'flex-start' : 'flex-end'}
                  >
                    {/* <p>{item.createDate}</p> */}
                    <p>{item.userName}</p>
                    <p>{item.content}</p>
                    <MoreBtn
                      text={['수정하기', '삭제하기']}
                      messageId={'18002'}
                      fixText={'수정했습니당 알겠죠이이이?'}
                    />
                  </Message>
                );
              })
            ) : (
              <p>앗 아직 메세지가 없어요!</p>
            )}
            {stickerList[0] &&
              stickerList.map((item: any) => {
                return (
                  <Sticker
                    url={item.stickerType}
                    x={item.poisitionX}
                    y={item.poisitionY}
                  />
                );
              })}
          </div>
          <div className="message-btns">
            <Btn
              link="/message/write"
              width="48px"
              height="48px"
              text=""
              padding="0"
              background="#111"
              logo="message.svg"
              imgSize="20px"
              center="center"
              onClick={() => setMessagePop(true)}
            />
            <Btn
              href="#"
              width="48px"
              height="48px"
              text=""
              padding="0"
              background="#FED700"
              logo="star.svg"
              imgSize="20px"
              center="center"
              onClick={() => setStickerPop(true)}
            />
          </div>
          {st && (
            <BottomBtn
              onclick={() => stickerPost('asd', x! - 25, y! - 25)}
              text="스티커 붙이기"
            />
          )}
        </>
      )}
    </div>
  );
};

export default MessageLoading;
