import React from "react"
import styled from "styled-components"

interface IBtnStyle {
    color?: string
    background?: string
}

const CustomButton = ({text, href, logo, color, background}: {
    text: string
    href: string
    color?: string
    background?: string
    logo?: string
}) => {
    
    return (
        <StyledBtn color={color} 
                   background={background}
        >
            <a href={href}>
                {text}
            </a>
            {logo && 
                <img src={`${process.env.PUBLIC_URL}/icons/${logo}`} alt=""/>
            }
        </StyledBtn>
    )
}

const StyledBtn = styled.div<IBtnStyle>`
    display: flex;
    width: 15rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 60px;
    font-weight: 500;
    justify-content: space-between;
    background: ${props => props.background || "initial"};
    a {
        margin-right: 3rem;
        color: ${props => props.color || "initial"};
    }
`

// const BlackBtn = styled(CustomButton)`

// `
export {CustomButton}