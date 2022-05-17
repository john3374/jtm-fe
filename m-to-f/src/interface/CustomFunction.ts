import axios, { AxiosError } from 'axios';
import { UserLogin } from './ReturnInterface';

function axiosRes(url: string, method: string, arr: object[]) {}

async function userLogin(
  url: string,
  email: string,
  password: string
): Promise<UserLogin | Error | AxiosError> {
  try {
    const getData = await axios({
      url,
      method: 'post',
      params: {
        email,
        password,
      },
    });
    return getData.data;
  } catch (e) {
    const error = e as Error | AxiosError;
    return error;
  }
}
async function userSignUp(
  email: string,
  password: string
): Promise<UserLogin | Error | AxiosError> {
  try {
    const getData = await axios({
      method: 'post',
      params: {
        email,
        password,
      },
    });
    return getData.data;
  } catch (e) {
    const error = e as Error | AxiosError;
    return error;
  }
}
