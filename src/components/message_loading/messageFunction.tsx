import EnvConfig from 'src/config/EnvConfig';
import axios from 'axios';
import { message, sticker } from './messageStore';

export const paperDetail = async (dispatch: any) => {
  try {
    const a = await axios({
      method: 'post',
      url: `${EnvConfig.LANTO_SERVER}paper/6005`,
      data: {
        user: {
          email: 'jam@gmail.com',
        },
      },
    });
    dispatch(message(a.data.messages));
    dispatch(sticker(a.data.stickers));
    console.log(a.data);
  } catch (e) {
    console.log(e);
  }
};

export const messageGet = async (
  dispatch: React.Dispatch<any>,
  message: any
) => {
  try {
    const a = await axios(`${EnvConfig.LANTO_SERVER}message`, {
      method: 'get',
      headers: {
        ['User-Email']: 'jam@gmail.com',
      },
    });
    dispatch(message(a.data.messages));
    console.log(a);
  } catch (e) {
    console.log(e);
  }
};

export const messagePost = async (
  email: string,
  content: any,
  font: any,
  color: any
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
          paperId: 6005,
        },
        message: {
          content: content,
          font: font,
          color: color,
        },
      },
    });
    console.log(a);
  } catch (e) {
    console.log(e);
  }
};

export const messageDelete = async (messageId: any) => {
  try {
    const a = await axios({
      url: `${EnvConfig.LANTO_SERVER}message/${messageId}`,
      method: 'delete',
      data: {
        user: {
          email: 'jam@gmail.com',
        },
      },
    });
    console.log(a);
  } catch (e) {
    console.log(e);
  }
};

export const messageFix = async (text: string, messageId: string) => {
  const a = await axios({
    method: 'put',
    url: `${EnvConfig.LANTO_SERVER}message/${messageId}`,
    data: {
      user: {
        email: 'jam@gmail.com',
      },
      message: {
        content: text,
        font: '굴림',
        color: '#a72727',
      },
    },
  });
  console.log(a);
  console.log('수정완료요~');
};

export const messageFixOrDelete = async (
  text: string,
  messageId: string,
  content?: string
) => {
  if (text === '수정하기') {
    console.log('수정하기기능');
    messageFix(content!, messageId);
  } else if (text === '삭제하기') {
    console.log('삭제하기 기능');
    messageDelete(messageId);
  }
};

export const stickerPost = async (
  email: string,
  x: number,
  y: number,
  stickerNum: number
) => {
  try {
    const q = await axios({
      method: 'post',
      url: `${EnvConfig.LANTO_SERVER}sticker`,
      data: {
        user: {
          email: 'merge@gmail.com',
        },
        paper: {
          paperId: 6005,
        },
        sticker: {
          positionX: x.toString(),
          positionY: y.toString(),
          kind: stickerNum,
        },
      },
    });
    console.log(q);
  } catch (e) {
    console.log(e);
  }
};
