import styled from "styled-components";
import Arrow from "../../../assets/arrowBlack.svg"

export const ContainerCard = styled.div `
    width: 100%;
    height: 100px;
    background: var(--cinza-claro);
    border-radius: 10px;
    display: flex;
`

export const ContentText = styled.div `
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3, p {
        margin-left: 3vw;
    }
    h3{
        margin-top: 10px;
        color: var(--branco)
    }
    h3 + p {
        color: var(--amarelo);
        font-size: 0.8rem;
        margin-bottom: 10px;
    }
    div{
        width: 90%;
        display: flex;
        justify-content: space-between;
        p{
            margin-left: 0;
            color: var(--verde)
        }
        p + p {
            color: var(--branco);
            span {
                color: var(--amarelo)
            }
        }
    }
`

export const ContainerButton = styled.button `
    width: 12%;
    height: 100%;
    background: var(--amarelo);
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`
export const ContainerImg = styled.div `
    background: url(${Arrow});
    background-size: cover;
    width: 60%;
    height: 20%;

`