import styled from "styled-components";
import Input from '../Input'

export const FormContainer = styled.form`
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    input::placeholder {
    color: var(--verde);
    }

    button {
    background-color: var(--verde);
    color: var(--cinza-escuro);
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    label{
        padding: 0 0 13px 5px;
        color: var(--branco);
        font-weight: 300;
        font-size: 1.2rem;
    }
`;

export const ErrorSpanContainer = styled.span`
    text-align: right;
    padding-right: 5px;
    color: var(--vermelho);
    font-size: 1rem;
    font-weight: 300;
`;