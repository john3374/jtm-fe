import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface IBottomBtn {
    text: string
    onclick: any
}

const BottomBtn = ({text, onclick}: IBottomBtn) => {
    return (
        <StyledBtn onClick={onclick}>
            {text}
        </StyledBtn>
    )
}

const StyledBtn = styled.button`
border: none;
width: 100%;
background: black;
padding: 1rem 0;
margin-top: 1rem;
text-align: center;
color: white;
font-size: 1.2rem;
`

export default BottomBtn;