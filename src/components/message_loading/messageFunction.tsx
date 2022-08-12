import EnvConfig from 'src/config/EnvConfig';
import axios from 'axios';
import { message, paper, reaction, sticker } from './messageStore';

export const paperDetail = async (
  email: string,
  paperId: string,
  dispatch: any
) => {
  try {
    const a = await axios({
      method: 'post',
      url: `${EnvConfig.LANTO_SERVER}paper/${paperId}`,
      // url: `${EnvConfig.LANTO_SERVER}paper/${paperId}`,
      data: {
        user: {
          email: email,
        },
      },
    });
    dispatch(message(a.data.messages));
    dispatch(sticker(a.data.stickers));
    dispatch(paper(a.data.papers));
    dispatch(reaction(a.data.reactions));
  } catch (e) {
    throw new Error('페이퍼 목록 불러오기에 실패했습니다');
  }
};

export const messagePost = async (
  email: string,
  content: any,
  font: any,
  color: any,
  paperId: string
) => {
  try {
    const a = await axios({
      method: 'post',
      url: `${EnvConfig.LANTO_SERVER}message`,
      data: {
        user: {
          email: email,
        },
        paper: {
          paperId: paperId,
        },
        message: {
          content: content,
          font: font,
          color: color,
        },
      },
    });
  } catch (e) {
    alert('메세지 작성에 실패했습니다');
    throw new Error('메세지 작성에 실패했습니다');
  }
};

export const messageDelete = async (email: string, messageId: any) => {
  try {
    const a = await axios({
      url: `${EnvConfig.LANTO_SERVER}message/${messageId}`,
      method: 'delete',
      data: {
        user: {
          email: email,
        },
      },
    });
  } catch (e) {
    alert('메세지 삭제를 실패했습니다');
    throw new Error('메세지 삭제를 실패했습니다');
  }
};

export const messageFix = async (
  email: string,
  text: string,
  messageId: string,
  fixColor: string
) => {
  try {
    const a = await axios({
      method: 'put',
      url: `${EnvConfig.LANTO_SERVER}message/${messageId}`,
      data: {
        user: {
          email: email,
        },
        message: {
          content: text,
          font: '굴림',
          color: fixColor,
        },
      },
    });
  } catch (e) {
    alert('메세지 수정에 실패했습니다');
    throw new Error('메세지 수정에 실패했습니다');
  }
};

export const stickerPost = async (
  email: string,
  x: number,
  y: number,
  paperId: string,
  stickerNum: number
) => {
  try {
    const q = await axios({
      method: 'post',
      url: `${EnvConfig.LANTO_SERVER}sticker`,
      data: {
        user: {
          email: email,
        },
        paper: {
          paperId: paperId,
        },
        sticker: {
          positionX: x.toString(),
          positionY: y.toString(),
          kind: stickerNum,
        },
      },
    });
  } catch (e) {
    alert('스티커 작성에 실패했습니다');
    throw new Error('스티커 작성에 실패했습니다');
  }
};

export const reactionAmount = async (messageId: number) => {
  try {
    const a = await axios({
      url: `${EnvConfig.LANTO_SERVER}reaction/${messageId}`,
      method: 'get',
    });
    return { ...a.data };
  } catch (e) {
    alert('리액션 목록 불러오기에 실패했습니다');
    throw new Error('리액션 목록 불러오기에 실패했습니다');
  }
};

export const reactionAdd = async (email: string, messageId: number) => {
  try {
    const reactionTouch = await axios({
      url: `${EnvConfig.LANTO_SERVER}reaction`,
      method: 'post',
      data: {
        message: {
          messageId: messageId,
        },
        user: {
          email: email,
        },
        reaction: {
          emoji: 'asd',
        },
      },
    });
  } catch (e) {
    alert('리액션 추가를 실패했습니다');
    throw new Error('리액션 추가를 실패했습니다');
  }
};

export const reactionMinus = async (
  email: string,
  messageId: number,
  reactionId: any
) => {
  try {
    const reactionTouch = await axios({
      url: `${EnvConfig.LANTO_SERVER}reaction`,
      method: 'delete',
      data: {
        message: {
          messageId: messageId,
        },
        user: {
          email: email,
        },
        reaction: {
          reactionId: reactionId,
        },
      },
    });
  } catch (e) {
    alert('리액션 제거를 실패했습니다');
    throw new Error('리액션 제거를 실패했습니다');
  }
};
