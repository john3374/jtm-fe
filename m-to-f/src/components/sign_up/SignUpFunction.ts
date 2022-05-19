// interface SignIn {
//   doubleCheck: boolean;
//   passVerify(): Verify;
//   nickname: string;
//   email: string;
//   password: string;
// }

import { Verify } from './SignUpInterface';

export const passVerify = ({
  nickNameTest,
  nickname,
  emailTest,
  email,
  passwordTest,
  password,
  repassword,
  enterVerify,
  verifyNum,
  doubleCheck,
}: Verify): boolean => {
  return (
    nickNameTest.test(nickname) &&
    emailTest.test(email) &&
    passwordTest.test(password) &&
    repassword === password &&
    enterVerify === verifyNum &&
    doubleCheck
  );
};

// export const signInTest = async (
//   e: React.FormEvent<HTMLFormElement>,
//   { doubleCheck, passVerify, nickname, email, password }: SignIn
// ) => {
//   e.preventDefault();

//   if (doubleCheck) {
//     if (passVerify()) {
//       await axios({
//         method: 'post',
//         url: EnvConfig.POST_DATA,
//         data: {
//           email: email,
//           password: password,
//           userName: nickname,
//         },
//       })
//         .then(function (response) {
//           if (response.status === 200) {
//             alert('complete');
//           }
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     } else {
//       alert('입력 내용이 잘못됐습니다.');
//     }
//   }
// };
