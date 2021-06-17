import styled from "styled-components";

export const ContainerCard = styled.div `
    width: 20vw;
    height: 170px;
    border-radius: 10px;
    background: var(--cinza-escuro);
    padding: 20px;
    p{
        color: var(--branco);
        font-size: 1.3rem;
        margin-bottom: 10px;
    }
    p + div {
        display: flex;
        p{
            margin-right: 30px;
            font-size: 1rem;
            color: var(--vermelho)
        }
        span{
            font-size: 1rem;
            color: var(--branco)
        }
    }
    div + div {
        display: flex;
        p{
            font-size: 0.8rem;
            margin-right: 20px;
        }
        span {
            color: var(--amarelo);
            font-size: 0.8rem;
        }
    }

`