const MESSAGE = 'messageStore/MESSAGE';
const STICKERON = 'messageStore/STICKERON';

export const message = (message: any) => ({ type: MESSAGE, message });
export const sticker = () => ({ type: STICKERON });

export const messageInitialState = {
  message: {},
  sticker: false,
};

export const messageReducer = (state = messageInitialState, action: any) => {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case STICKERON:
      return {
        ...state,
        sticker: true,
      };
    default:
      return {
        ...state,
      };
  }
};
