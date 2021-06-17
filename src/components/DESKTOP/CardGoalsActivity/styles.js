import styled from "styled-components";

export const ContainerCard = styled.div `
    width: 20vw;
    height: 120px;
    border-radius: 10px;
    background: var(--cinza-escuro);
    padding: 10px 20px;
    p{
        color: var(--branco);
        font-size: 1rem;
        margin-bottom: 5px;
    }

    p > span {
        color: var(--amarelo)
    }
    p + p{
        color: var(--vermelho);
    }
    p + p + p {
        color: var(--branco);
        font-size: 0.8rem
    }

`