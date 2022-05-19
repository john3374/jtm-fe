import React from "react"
import styled from "styled-components"

interface IBtnStyle {
    color?: string
    background?: string
}

/*
공통 버튼 컴포넌트
*/
const Btn = ({text, href, logo, color, background}: {
    text: string
    href: string
    color?: string
    background?: string
    logo?: string
}) => {
  return (
    <StyledBtn href={href}
               color={color} 
               background={background}>
      {text}
      {logo && <img src={`${process.env.PUBLIC_URL}/icons/${logo}`} alt="" />}
    </StyledBtn>
  );
};

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

export {Btn}