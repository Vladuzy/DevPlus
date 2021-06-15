import styled from 'styled-components'

export const FormContainer = styled.form`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input::placeholder {
    color: var(--amarelo);
  }

  button {
    background-color: var(--amarelo);
    color: var(--cinza-escuro);
  }
`

export const SelectContainer = styled.select`
  width: 220px;
  height: 35px;
  background-color: var(--cinza-claro);
  border-radius: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  border: none;
  color: var(--amarelo);
  padding-left: 15px;
  font-weight: 300;
  
  option {
    border: none;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
`

export const ErrorSpanContainer = styled.span`
  text-align: right;
  padding-right: 5px;
  color: var(--vermelho);
  font-size: 1rem;
  font-weight: 300;
`