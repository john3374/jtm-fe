import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import EnvConfig from './components/config/EnvConfig';

import GoToLogin from './components/GoToLogin';
import SignUp from './components/sign_up/SignUp';
import KakaoLogin from './components/kakao/KakaoLogin';
import InputEmail from './components/kakao/InputEmail';
import AppLayout from './components/layout/AppLayout';
import { NamePaper } from './components/create_paper/NamePaper';
import Theme from './components/create_paper/Theme';
import PaperMain from './components/create_paper/PaperMain';

const Router = () => {
  const [REST_API, set_REST_API] = useState<string>('');
  const [CLIENT_SECRET, set_CLIENT_SECRET] = useState<string>('');

  useEffect(() => {
    axios
      .get(EnvConfig.REST_API)
      .then(function (res) {
        set_REST_API(res.data.result);
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
    <BrowserRouter>
      {REST_API && CLIENT_SECRET ? (
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<GoToLogin api={REST_API} />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route
              path="/oauth/kakao/callback"
              element={<KakaoLogin api={REST_API} client={CLIENT_SECRET} />}
            />
            <Route path="/inputEmail" element={<InputEmail />} />
            <Route path="/createPaper" element={<PaperMain />} />
            <Route path="/createPaper/decideName" element={<NamePaper />} />
            <Route path="/createPaper/selectTheme" element={<Theme />} />
          </Route>
        </Routes>
      ) : (
        'loading...'
      )}
    </BrowserRouter>
  );
};

export default Router;
