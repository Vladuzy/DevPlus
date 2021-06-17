import styled from "styled-components";

export const ButtonADD = styled.button`
  background-color: transparent;
  border: none;
  z-index: 1;
  position: fixed;
  right: 7px;
  bottom: 72px;
  .ButtonADD {
    color: ${(props) =>
      (props.type === "Habito" || props.type === "Atividade" || props.type === "Meta" )? "var(--verde)" : "var(--amarelo)"};
    width: 65px;
    height: 65px;
  }
`;
