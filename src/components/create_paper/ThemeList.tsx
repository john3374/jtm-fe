import React, { useState } from 'react';
import styled from 'styled-components';

interface PropsType {
  path: string;
  name: string;
  set: any;
}

function ThemeList(props: PropsType) {
  const [select, setSelect] = useState<number>();

  const choice = () => {
    const selecting = props.name;
    switch (selecting) {
      case '기본/Simple':
        props.set(1);
        setSelect(1);
        break;
      case '생일/Birthday':
        props.set(2);
        setSelect(2);
        break;
      case '축하/Congratulations':
        props.set(3);
        setSelect(3);
        break;
    }
    console.log(select);
  };

  return (
    <ItemStyle>
      <ImgStyle>
        <button onClick={choice}>
          <img
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            src={props.path}
            alt={props.name}
          />
        </button>
      </ImgStyle>
      <TextStyle> {props.name} </TextStyle>
    </ItemStyle>
  );
}

const ItemStyle = styled.div`
  margin-bottom: 0.2rem;
  word-break: break-all;
  width: 160px;
  height: 35vh;
`;

const ImgStyle = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid lightgrey;
  border-radius: 1rem;
  width: 100%;
  height: 90%;
`;

const TextStyle = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

export default ThemeList;
