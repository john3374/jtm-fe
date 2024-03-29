import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import './messageLoading.scss';
import Header from '../layout/Header';
import { Btn } from '../common/Btn';
import { messageInitialState, messageReducer } from './messageStore';
import MoreBtn from '../common/MoreBtn';
import { Loading, Message } from './messageInterface';
import { paperDetail, stickerPost } from './messageFunction';
import { Link, useParams } from 'react-router-dom';
import StickerWrite from './StickerWrite';
import Sticker from './Sticker';
import BottomBtn from '../common/BottomBtn';
import Reaction from './Reaction';
import { useAuthState } from 'src/context';

// 회원가입에서 인증번호 useState 말고 유저단에 안 보여줄 방법 찾아봐야
// 모바일 버전 스티커 가능하게 따로 만들어야 할 듯

const MessageLoading = () => {
  // const [messagePop, setMessagePop] = useState<boolean>(false);
  const [fixPop, setFixPop] = useState<boolean>(false);
  const [state, dispatch] = useReducer(messageReducer, messageInitialState);

  // sticker state ===
  const [stickerPop, setStickerPop] = useState<boolean>(false);
  // 스티커 작성 페이지 띄우기 여부
  const [st, setSt] = useState<number>();
  // 현재 선택한 스티커의 이름
  // const [x, setX] = useState<number>();
  const [x, setX] = useState<number>();
  // 스티커의 x 좌표
  const [postX, setPostX] = useState<number>(0);
  // api에 전송할 스티커의 x 좌표 (마우스의 커서를 스티커의 정중앙에 맞추기 위해 좌표 값을 두 개로 나눴습니다)
  const [y, setY] = useState<number>();
  // 스티커의 y 좌표
  const [postY, setPostY] = useState<number>(0);
  // api에 전송할 스티커의 y 좌표
  const [move, setMove] = useState<boolean>(false);
  // 스티커를 움직이고 있는가에 대한 여부
  const stickerList = state.sticker;
  // api를 통해 불러온 페이퍼에 붙어있는 스티커 목록들
  // ==================

  const { paperId } = useParams();
  const messageList = state.message;

  const { user, token } = useAuthState();
  const userId = user?.userId;

  const paperName = state.paper.paperTitle;
  const reactionAll = state.reaction;

  useEffect(() => {
    paperDetail(userId!, paperId!, dispatch);
    console.log(123);
  }, []);

  const Message = styled.div<Loading>`
    width: ${props => (props.width ? props.width : '327px')};
    background-color: ${props =>
      props.backColor ? props.backColor : '#ffbba6'};
    font-family: ${props => (props.font ? props.font : 'sans-serif')};
    border-radius: 12px;
    padding: 16px 16px 20px 16px;
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
      className={stickerPop ? `message-loading full` : 'message-loading'}
      onMouseMove={e => {
        move && setX(e.clientX);
        move && setY(e.clientY + e.currentTarget.scrollTop);
      }}
      // 페이퍼 페이지에서 마우스 위치에 따라 스티커의 위치를 잡아줌
    >
      {user?.userId === null && (
        <>
          <div className="dis"></div>
        </>
      )}
      {stickerPop ? (
        <>
          <StickerWrite setStickerPop={setStickerPop} setSt={setSt} />
          {/* 스티커 팝의 boolean 값에 따라 스티커 작성 페이지가 나타날지 메세지 페이지가 나타날지 나뉩니다 */}
        </>
      ) : (
        <>
          {st && (
            <Sticker
              url={st}
              setMove={setMove}
              x={x}
              y={y}
              setPostX={setPostX}
              setPostY={setPostY}
            />
            // 스티커를 선택한 겂이 있을 때 그 스티커가 메세지 페이지에 나타납니다
          )}
          <Header to="/createPaper" pageNm={paperName} />
          <div className="message-wrap">
            {messageList[0] ? (
              messageList.map((item: Message, idx: number) => {
                return (
                  <Message
                    key={idx}
                    // backColor={'#fff'}
                    backColor={item.color}
                    font={item.font}
                    width={item.content.length <= 84 ? '234px' : ''}
                    left={(idx + 1) % 2 !== 0 ? 'flex-start' : 'flex-end'}
                  >
                    {/* <p>{item.createDate}</p> */}
                    <p>{item.userName}</p>
                    <p>{item.content}</p>
                    <div className="more-wrap">
                      {/* {item.userName === user?.userName && ( */}
                      <MoreBtn
                        text={['수정하기', '삭제하기']}
                        messageId={item.messageId}
                        prev={item.content}
                      />
                      {/* )} */}
                      <Reaction
                        messageId={item.messageId}
                        user={user}
                        reactionAll={reactionAll}
                      />
                    </div>
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
        </>
      )}
      {user?.userId !== null && (
        <div className="message-btns">
          <div className="btn">
            <Btn
              link={`/message/write/${paperId!}`}
              width="48px"
              height="48px"
              text=""
              padding="0"
              background="#111"
              logo="message.svg"
              imgSize="20px"
              center="center"
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
          {/* 임시로 만들어놓은 스티커 붙이기 버튼 */}
          {st && (
            <BottomBtn
              onclick={() => stickerPost(userId!, postX, postY, paperId!, st)}
              text="스티커 붙이기"
            />
          )}
        </div>
      )}
      {userId === null && (
        <Link to="/login">
          <div className="go-login">
            <BottomBtn text="로그인하러 가기" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default MessageLoading;
