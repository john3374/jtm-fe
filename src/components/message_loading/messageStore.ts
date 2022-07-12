const MESSAGE = 'messageStore/MESSAGE';

export const message = (message: any) => ({ type: MESSAGE, message });

export const initialState = {
  message: {},
};

export const messageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return {
        ...state,
      };
  }
};
