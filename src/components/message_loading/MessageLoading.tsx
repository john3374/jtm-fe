import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
// import { Btn } from '../common/Btn';
import './messageLoading.scss';
import Header from '../layout/Header';
import { Btn } from '../common/Btn';
import MessageInput from './MessageInput';

const MessageLoading = () => {
  const [messagePop, setMessagePop] = useState<boolean>(false);
  const loading = async (content: any, font: any, color: any) => {
    try {
      //     // 메세지 목록 확인도 에러나는 중
      //     const a = await axios.get('http://3.39.162.248:80/message', {
      //       data: {
      //         user: {
      //           email: 'jam@gmail.com',
      //         },
      //       },
      //     });
      //     console.log(a);
      //   } catch (e) {
      //     console.log(e);
      //   }
      // };

      // loading();

      // 메세지 삭제 패스 변수 사용 에러 나는 중
      // const a = await axios.delete(`http://3.39.162.248:80/message/1`, {
      //   params: {
      //     message: {
      //       id: 1,
      //     },
      //   },
      // });

      // 메세지 수정 패스 변수 사용
      // const a = await axios({
      //   method: 'put',
      //   url: 'http://3.39.162.248:80/message/5',
      //   data: {
      //     user: {
      //       email: 'jam@gmail.com',
      //     },
      //     message: {
      //       content: '만두',
      //       font: '굴림',
      //       color: '#333',
      //     },
      //   },

      // 메세지 작성
      const a = await axios({
        method: 'post',
        url: 'http://3.39.162.248:80/message',
        data: {
          user: {
            email: 'jam@gmail.com',
          },
          paper: {
            paperId: 1,
          },
          message: {
            content: content,
            font: font,
            color: color,
            // content: 'asdasdsadas',
            // font: '굴림',
            // color: '#f111',
          },
        },
      });
      console.log(a);
    } catch (e) {
      console.log(e);
    }
  };
  const c = async () => {
    const q = await axios.get('http://3.39.162.248:80/message', {
      data: {
        user: {
          email: 'jam@gmail.com',
        },
      },
    });
    console.log(q);
  };
  c();
  const paperName = '숨니의 생일을 축하해요!';
  // 페이퍼 제목을 가져와야 함

  const Message = styled.div`
    width: 327px;
    background-color: #ffbba6;
    border-radius: 12px;
    padding: 20px 24px;
    box-sizing: border-box;
    margin-top: 34px;
    & p {
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
    }
  `;
  return (
    <div className="message-loading">
      <Header to="/" pageNm={paperName} />
      <div className="message-wrap">
        <Message>
          <p>
            수민 안뇽 ! 생일 축하해 :D 우리가 올해 같은 동아리가 되면서 함께
            보내는 시간이 많아져서 정말 좋아 우리가 올해 같은 동아리가 되면서
            함께 보내는 시간이 많아져서 정말 좋아 우리가 올해 같은 동아리가
            되면서 함께 보내는 시간이 많아져서 정말 ...
          </p>
        </Message>
        <Message>
          <p>
            수민 안뇽 ! 생일 축하해 :D 우리가 올해 같은 동아리가 되면서 함께
            보내는 시간이 많아져서 정말 좋아 우리가 올해 같은 동아리가 되면서
            함께 보내는 시간이 많아져서 정말 좋아 우리가 올해 같은 동아리가
            되면서 함께 보내는 시간이 많아져서 정말 ...
          </p>
        </Message>
      </div>
      <div className="message-btns">
        <Btn
          href="#"
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
        />
      </div>
      {messagePop && (
        <MessageInput send={loading} setMessagePop={setMessagePop} />
      )}
    </div>
  );
};

export default MessageLoading;
