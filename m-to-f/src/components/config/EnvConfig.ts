type EnvType = {
  REST_API: string;
  CLIENT_SECRET: string;
  USER_DATA: string;
  VERIFY_MAIL: string;
  DOUBLE_CHECK: string;
  NICK_CHECK: string;
};

const EnvConfig: EnvType = {
  REST_API: process.env.REACT_APP_REST_API || '',
  CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET || '',
  USER_DATA: process.env.REACT_APP_USER_DATA || '',
  VERIFY_MAIL: process.env.REACT_APP_VERIFY_MAIL || '',
  DOUBLE_CHECK: process.env.REACT_APP_DOUBLE_CHECK || '',
  NICK_CHECK: process.env.REACT_APP_NICKNAME_CHECK || '',
};

export default EnvConfig;
