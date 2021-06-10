import styled from "styled-components";


export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: var(--cinza-escuro);
    header > section{
        display: none;
    }
`

export const HeaderStyles = styled.header `
    width: 100vw;
    height: 80px;
    display: flex;
    color: var(--branco);
    align-items: center;
    justify-content: space-between;
    input{
        display:none;
    }
    svg{
        display: none;
    }
    @media(max-width: 758px){
        h4{
            margin-left: 7vw;
        }
        svg{
            display: inline-block;
            font-size: 2rem;
            margin-right: 3vw;
            color: var(--verde);
        }
        input{
            &:checked ~ section {
                display: inline;
            }
        }
    }
`

export const ContactContainer = styled.section `
    width: 40vw;
    height: 150px;
    background: var(--verde);
    border-radius: 20px;
    margin-top: 120px;
    p{
        color: black;
        margin-top: 20px;
        margin-left: 10px;
    }
`