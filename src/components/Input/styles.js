import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: transparent;
  width: 180px;
  height: 100%;
  border: none;

  &::placeholder {
    color: var(--verde);
  }
`;

export const Container = styled.div`
  width: 220px;
  height: 35px;
  background-color: var(--cinza-claro);
  border-radius: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  border: none;
  color: var(--branco);
  padding-left: 15px;
  display: flex;
`;

export const ContainerImg = styled.div`
  background: url(${(props) => props.icon});
  background-size: cover;
  width: 40px;
  height: 35px;
`;
