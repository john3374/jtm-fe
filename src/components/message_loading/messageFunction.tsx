import EnvConfig from 'src/config/EnvConfig';
import axios from 'axios';

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
      url: `${EnvConfig.LANTO_SERVER}/message`,
      data: {
        user: {
          email: email,
        },
        paper: {
          paperId: 1,
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
        color: '#333',
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
