import styled from "styled-components";
import Input from "../Input";

export const FormContainer = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input::placeholder {
    color: var(--verde);
  }

  button {
    background-color: var(--verde);
    color: var(--cinza-escuro);
  }
`;

export const CalendarInput = styled(Input)`
  color: var(--verde);
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
