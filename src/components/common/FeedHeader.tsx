import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface PropsType {
  checkPoint: boolean;
  sideBar: any;
}

function FeedHeader(props: PropsType) {
  const onClick = () => {
    props.sideBar(!props.checkPoint);
  };

  return (
    <HeaderComponent>
      <Feed>Feed</Feed>
      <Hamburger>
        <FontAwesomeIcon onClick={onClick} icon={faBars} />
      </Hamburger>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  padding: 1.5rem 0;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Feed = styled.span`
  margin: 0.5rem 0 0 2rem;
  font-size: 1.5rem;
  font-weight: 900;
  font-family: 'IBM Plex Mono';
`;

const Hamburger = styled.div`
  margin: 0.9rem 2rem 0 0;
  &:hover {
    background-color: skyblue;
  }
`;

export default FeedHeader;
