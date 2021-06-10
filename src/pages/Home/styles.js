import styled from "styled-components";


export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: var(--cinza-escuro);
    @media(max-width: 758px){
        header > section{
        display: none;
        }
    }
`

export const HeaderStyles = styled.header `
    width: 100vw;
    height: 80px;
    display: flex;
    color: var(--branco);
    align-items: center;
    justify-content: space-around;
    input{
        display:none;
    }
    svg{
        display: none;
    }
    @media(max-width: 758px){
        justify-content: space-between;
        p{
            display: none;
        }
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
    width: 35vw;
    height: 150px;
    background: var(--verde);
    border-radius: 20px;
    margin-top: 120px;
    p{
        color: black;
        margin-top: 20px;
        margin-left: 10px;
        display: block;
    }
    @media(min-width: 758px){
        display:flex;
        justify-content: space-between;
        p{
            color: var(--white);
        }
        background: transparent;
        width: 35vw;
        margin-top: 100px;
        margin-left: 50vw;
    }
`

export const MainStyles = styled.main `
    width: 100vw;
    height: calc(100vh - 80px);
    background: var(--cinza-escuro);
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: var(--verde);
        font-size: 1.5rem;
        margin-top: 110px;
    }
    h2{
        color: var(--branco);
        margin-top:  30px;
        width: 250px;             
    }
    p{
        margin-top: 20px;
        font-size: 1rem;
        color: var(--amarelo);
        width: 265px;
        margin-left: 4vw;
    }
    div{
        margin-top: 30px;
        width: 220px;
        button{
            margin-top: 30px;
        }
    }

    @media(min-width: 758px){
        align-items: flex-start;
        h1{
            margin-top: 50px;
            font-size: 2.2rem;
            margin-left: 20vw;
        }
        h2{
            margin-left: 10vw;
            font-size: 2rem;
            width: 600px; 
        }
        p{
            margin-left: 10vw;
            font-size: 1.5rem;
            width: 500px;
        }
        div{
            width: 60vw;
            margin-left: 10vw;
            button + button{
                margin-left: 20px;
            }
        }
    }
`