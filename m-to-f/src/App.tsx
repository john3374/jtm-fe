import React, { useEffect, useState } from 'react';
import GoToLogin from './components/GoToLogin';
import EnvConfig from './components/config/EnvConfig';
import KakaoLogin from './components/kakao/KakaoLogin';
import InputEmail from './components/kakao/InputEmail';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
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
          <Route path="/" element={<GoToLogin api={REST_API} />} />
          <Route path="/inputEmail" element={<InputEmail />}></Route>
          <Route
            path="/oauth/kakao/callback"
            element={<KakaoLogin api={REST_API} client={CLIENT_SECRET} />}
          />
        </Routes>
      ) : (
        'loading...'
      )}
    </BrowserRouter>
  );
}

export default App;
