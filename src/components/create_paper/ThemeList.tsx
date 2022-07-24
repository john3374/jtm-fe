import React from 'react';
import styled from 'styled-components';

interface PropsType {
  path: string;
  name: string;
}

function ThemeList(props: PropsType) {
  const test = () => {
    const selecting = props.name;
    switch (selecting) {
      case '기본/Simple':
        console.log(1);
        break;
      case '생일/Birthday':
        console.log(2);
        break;
      case '축하/Congratulations':
        console.log(3);
        break;
    }
    // console.log('test', props.name);
  };
  return (
    <ItemStyle>
      <ImgStyle>
        <button onClick={test}>
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
