import React from 'react';
import styled from 'styled-components';

interface PropsType {
  path: string;
  name: string;
}

function ThemeList(props: PropsType) {
  return (
    <ItemStyle>
      <ImgStyle>
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
      </ImgStyle>
      <TextStyle>
        <span> {props.name} </span>
      </TextStyle>
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
  border: 2px solid black;
  width: 100%;
  height: 90%;
`;

const TextStyle = styled.div`
  text-align: center;
  margin-top: 0.1rem;
`;

export default ThemeList;
