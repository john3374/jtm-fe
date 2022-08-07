import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

interface PropsType {
  path: string;
  name: string;
  set: any;
}

function ThemeList(props: PropsType) {
  const [choose, setChoose] = useState<boolean>(false);

  const choice = () => {
    const selecting = props.name;
    setChoose(!choose);
    switch (selecting) {
      case '기본/Simple':
        props.set(1);
        break;
      case '생일/Birthday':
        props.set(2);
        break;
      case '축하/Congratulations':
        props.set(3);
        break;
    }
  };

  return (
    <ItemStyle>
      <ImgComponent className={choose ? `select-img` : `not-select-img`}>
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
        <FontAwesomeStyle>
          <FontAwesomeIcon
            className={choose ? `select-img` : `not-select-img`}
            onClick={choice}
            icon={faCircleDot}
          />
        </FontAwesomeStyle>
      </ImgComponent>
      <TextStyle> {props.name} </TextStyle>
    </ItemStyle>
  );
}

const ItemStyle = styled.div`
  border-radius: 1rem;
  margin-bottom: 0.2rem;
  word-break: break-all;
  width: auto;
  height: 220px;
  > .not-select-img {
    border: 1.5px solid lightgrey;
  }
  > .select-img {
    border: 3px solid #00b860;
  }
`;

const ImgComponent = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  width: 144px;
  height: 144px;
  > .not-select-img {
    border: 3px solid lightgrey;
  }
  > .select-img {
    border: 3px solid #00b860;
  }
`;

const FontAwesomeStyle = styled.div`
  position: absolute;
  margin: 0.7rem 0.7rem 0;
  top: 0;
  right: 0;
  > .not-select-img {
    color: #cccccc;
  }
  > .select-img {
    color: #00b860;
  }
`;

const TextStyle = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

export default ThemeList;
