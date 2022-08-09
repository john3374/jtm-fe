const MESSAGE = 'messageStore/MESSAGE';
const STICKER = 'messageStore/STICKER';
const X = 'messageStore/X';
const MOVE = 'messageStore/MOVE';

export const message = (message: any) => ({ type: MESSAGE, message });
export const sticker = (sticker: any) => ({ type: STICKER, sticker });
export const x = (x: number) => ({ type: X, x });
export const move = (move: boolean) => ({ type: MOVE, move });

export const messageInitialState = {
  message: {},
  sticker: {},
  x: 0,
  move: false,
};

export const messageReducer = (state = messageInitialState, action: any) => {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case STICKER:
      return {
        ...state,
        sticker: action.sticker,
      };
    case X:
      return {
        ...state,
        x: action.x,
      };
    case MOVE:
      return {
        ...state,
        move: action.move,
      };
    default:
      return {
        ...state,
      };
  }
};
