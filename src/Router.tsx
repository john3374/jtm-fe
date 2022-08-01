import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import EnvConfig from './config/EnvConfig';
import GoToLogin from './components/login/GoToLogin';
import SignUp from './components/sign_up/SignUp';
import KakaoLogin from './components/kakao/KakaoLogin';
import AppLayout from './components/layout/AppLayout';
import { NamePaper } from './components/create_paper/NamePaper';
import Theme from './components/create_paper/Theme';
import PaperMain from './components/create_paper/PaperMain';
import LoginEmail from './components/login/LoginEmail';
import { AuthProvider, useAuthState } from './context';
import Setting from './components/setting/Setting';
import MessageLoading from './components/message_loading/MessageLoading';
import PaperGift from './components/paper_view/PaperGift';

const Router = () => {
  const [KAKAO_API, set_KAKAO_API] = useState<string>('');
  const [CLIENT_SECRET, set_CLIENT_SECRET] = useState<string>('');

  useEffect(() => {
    axios
      .get(EnvConfig.KAKAO_API)
      .then(function (res) {
        set_KAKAO_API(res.data.result);
      })
      .catch(function (err) {
        console.log(err);
      });
    axios
      .get(EnvConfig.CLIENT_SECRET)
      .then(function (res) {
        set_CLIENT_SECRET(res.data.result);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<GoToLogin api={KAKAO_API} />} />
            <Route path="/login" element={<LoginEmail />} />
            <Route path="/login/signUp" element={<SignUp />} />
            {KAKAO_API && CLIENT_SECRET ? (
              <Route
                path="/oauth/kakao/callback"
                element={<KakaoLogin api={KAKAO_API} client={CLIENT_SECRET} />}
              />
            ) : null}
            <Route path="/createPaper" element={<PaperMain />} />
            <Route path="/createPaper/decideName" element={<NamePaper />} />
            <Route
              path="/createPaper/selectTheme:paperTitle"
              element={<Theme />}
            />
            <Route path="/setting" element={<Setting />} />
            <Route path="/message" element={<MessageLoading />} />
            <Route path="/paperGift" element={<PaperGift />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
