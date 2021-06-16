import styled from "styled-components";

export const MainDashboard = styled.main`
  background: var(--verde);
`;

export const MainContainer = styled.main`
  height: 88vh;
  background-color: var(--cinza-claro);

  border-top-left-radius: 30px;
`;

export const ActiveContainer = styled.section`
  height: 45%;
  border: 2px solid var(--verde);
` 

export const ActiveTitleContainer = styled.div`
  border: 1px solid red;

  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    font-weight: 300;
    color: var(--branco);
    font-size: 30px;
    margin-left: 30px;
  }

  button {
    width: 150px;
    height: 30px;
    color: var(--verde);
    background: none;
    border: 2px solid var(--verde);
    border-radius: 10px;
  }
`