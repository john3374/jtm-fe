import axios from 'axios';
import { LoginDispatch } from './reducer';

const ROOT_URL = 'http://49.50.160.59:8833';

export const loginUser = async (dispatch: any, loginPayload: any) => {
  try {
    // console.log(loginPayload); // data 하드코딩 수정해야함
    const response = await axios({
      method: 'POST',
      url: `${ROOT_URL}/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: 'star_horse_write@gmail.com',
        password: '12345678',
      },
    });

    if (response.status === 200) {
      // console.log(response.data);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      return response.data;
    } else {
      dispatch({ type: 'LOGIN_ERROR', error: response.data.error[0] });
    }
    return;
  } catch (e) {
    // console.log(e);
    dispatch({ type: 'LOGIN_ERROR', error: e });
  }
};

export async function logout(dispatch: any) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
