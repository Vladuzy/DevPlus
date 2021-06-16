import styled from "styled-components";
import Input from '../Input'

export const FormContainer = styled.form`
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

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
    height: 60px;
`;

export const ErrorSpanContainer = styled.span`
    text-align: right;
    padding-right: 5px;
    color: var(--vermelho);
    font-size: 1rem;
    font-weight: 300;
`;

export const CalendarInput = styled(Input)`
  color: var(--verde);
`

