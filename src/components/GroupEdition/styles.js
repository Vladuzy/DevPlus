import styled from 'styled-components'

export const FormContainer = styled.form`
  height: 200px;
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
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
`

export const ErrorSpanContainer = styled.span`
  text-align: right;
  padding-right: 5px;
  width: 100%;
  color: var(--vermelho);
  font-size: 1rem;
  font-weight: 300;
`