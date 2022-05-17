import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

interface IBtnStyle {
    color?: string
    background?: string
}

/*
공통 버튼 컴포넌트
href: 외부링크 (a 태그를 쓴다)
link: 내부링크 (라우터로 이동)
*/
const Btn = ({text, href, link, logo, color, background}: {
    text: string
    href?: string
    link?: string
    color?: string
    background?: string
    logo?: string
}) => {
    
    return (
        <StyledBtn color={color} background={background}>
            {href && 
                <a href={href} target="_blank" rel="noreferrer">
                    {text}
                </a>
            }
            {link &&
                <Link to={link}>
                    {text}
                </Link>
            }
            {!href&&!link&&
                'error 처리 요망'
            }
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


export {Btn}