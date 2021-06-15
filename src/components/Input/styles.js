import styled from "styled-components";

export const Container = styled.input`
  width: 220px;
  height: 35px;
  background-color: var(--cinza-claro);
  border-radius: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  border: none;
  color: var(--branco);
  padding-left: 15px;

  &::placeholder {
    color: var(--verde);
  }
`;
