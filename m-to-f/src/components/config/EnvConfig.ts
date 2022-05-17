type EnvType = {
  REST_API: string;
  CLIENT_SECRET: string;
  POST_DATA: string;
  VERIFY_MAIL: string;
  DOUBLE_CHECK: string;
};

const EnvConfig: EnvType = {
  REST_API: process.env.REACT_APP_REST_API || '',
  CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET || '',
  POST_DATA: process.env.REACT_APP_POST_DATA || '',
  VERIFY_MAIL: process.env.REACT_APP_VERIFY_MAIL || '',
  DOUBLE_CHECK: process.env.REACT_APP_DOUBLE_CHECK || '',
};

export default EnvConfig;
