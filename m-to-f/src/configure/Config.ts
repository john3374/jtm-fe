type envConfig = {
  POST_DATA: string;
  VERIFY_MAIL: string;
  DOUBLE_CHECK: string;
};

const Config: envConfig = {
  POST_DATA: process.env.REACT_APP_POST_DATA || '',
  VERIFY_MAIL: process.env.REACT_APP_VERIFY_MAIL || '',
  DOUBLE_CHECK: process.env.REACT_APP_DOUBLE_CHECK || '',
};

export default Config;
