import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 15%;
  border: 1px solid var(--vermelho);
  height: 300px;
  border-radius: 20px;
  a {
    color: white;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50px;
  }
  h3 {
    color: var(--amarelo);
  }
`;
