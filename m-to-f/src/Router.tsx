import React, { useEffect, useState } from 'react';

import EnvConfig from './components/config/EnvConfig';
import axios from 'axios';

import GoToLogin from './components/GoToLogin';
import KakaoLogin from './components/kakao/KakaoLogin';
import InputEmail from './components/kakao/InputEmail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import { NamePaper } from './components/create_paper/NamePaper';
import Theme from './components/create_paper/Theme';
import PaperMain from './components/Paper_main/PaperMain';

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
  console.log(EnvConfig.REST_API);

  return (
    <BrowserRouter>
      {REST_API && CLIENT_SECRET ? (
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<GoToLogin api={REST_API} />} />
            <Route path="/inputEmail" element={<InputEmail />} />
            <Route path="/createPaper" element={<NamePaper />} />
            <Route path="/Paper" element={<PaperMain />} />
            <Route path="/selectTheme" element={<Theme />} />
            <Route
              path="/oauth/kakao/callback"
              element={<KakaoLogin api={REST_API} client={CLIENT_SECRET} />}
            />
          </Route>
        </Routes>
      ) : (
        'loading...'
      )}
    </BrowserRouter>
  );
};

export default Router;
