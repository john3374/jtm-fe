import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IBtnStyle {
  color?: string;
  background?: string;
}

interface IBtn {
  text: string;
  href?: string;
  link?: string;
  color?: string;
  background?: string;
  logo?: string;
}
/*
공통 버튼 컴포넌트
href: 외부링크 (a 태그를 쓴다)
link: 내부링크 (라우터로 이동)
*/
const Btn = ({ ...props }: IBtn) => {
  return (
    <>
      {props.href && <HrefBtn {...props} />}
      {props.link && <LinkBtn {...props} />}
    </>
  );
};

const HrefBtn = ({ ...props }: IBtn) => {
  return (
    <StyledBtn
      href={props.href}
      color={props.color}
      background={props.background}
    >
      {props.text}
      {props.logo && (
        <img src={`${process.env.PUBLIC_URL}/icons/${props.logo}`} alt="" />
      )}
    </StyledBtn>
  );
};

const LinkBtn = ({ ...props }: IBtn) => {
  const link = props.link ? props.link : '';
  return (
    <StyledLink to={link} color={props.color} background={props.background}>
      {props.text}
      {props.logo && (
        <img src={`${process.env.PUBLIC_URL}/icons/${props.logo}`} alt="" />
      )}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<IBtnStyle>`
  display: flex;
  width: 15rem;
  margin: 1rem 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: 60px;
  justify-content: space-between;
  background: ${props => props.background || 'initial'};
  color: ${props => props.color || 'initial'};
`;

const StyledBtn = styled.a<IBtnStyle>`
  display: flex;
  width: 15rem;
  margin: 1rem 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: 60px;
  justify-content: space-between;
  background: ${props => props.background || 'initial'};
  color: ${props => props.color || 'initial'};
`;

export { Btn };
