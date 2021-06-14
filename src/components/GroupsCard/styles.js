import styled from "styled-components";
import Arrow from '../../assets/arrow.svg'

export const Container = styled.div `
    width: 100%;
    height: 110px;
    background: var(--cinza-claro);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    h3{
        color: white;
        font-size: 1.4rem;
        margin-bottom: 10px;
    }
    p{
        color: var(--amarelo)
    }
    p + p {
        color: var(--verde);
        margin-top: 10px;
    }
`


export const ImgContainer = styled.div`
    background: url(${Arrow});
    background-size: cover;
    width: 30px;
    height: 30px;
    align-self: center;
    margin-left: 10px
`