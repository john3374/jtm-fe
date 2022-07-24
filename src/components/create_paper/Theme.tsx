import React, { useState } from 'react';
import Header from '../layout/Header';
import BottomBtn from '../common/BottomBtn';
import ThemeList from './ThemeList';
import styled from 'styled-components';
import simple from '../../static/theme/simple.png';
import birthday from '../../static/theme/birthday.png';
import congratulations from '../../static/theme/congratulations.png';

function Theme() {
  const [selectTheme, setSelectTheme] = useState<number>(0);

  const inputSelectTheme = (x: number) => {
    setSelectTheme(x);
  };

  const theme = [
    {
      id: 1,
      path: simple,
      name: '기본/Simple',
    },
    {
      id: 2,
      path: birthday,
      name: '생일/Birthday',
    },
    {
      id: 3,
      path: congratulations,
      name: '축하/Congratulations',
    },
  ];

  return (
    <>
      <Header pageNm="롤링페이퍼 만들기" to="/createPaper/decideName" />
      <main>
        <ComponentStyle>
          {theme.map(value => (
            <ThemeList
              set={inputSelectTheme}
              path={value.path}
              name={value.name}
              key={value.id}
            />
          ))}
        </ComponentStyle>
      </main>
      <BottomBtn text="다음" />
    </>
  );
}

const ComponentStyle = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  gap: 0.5rem;
`;

export default Theme;
