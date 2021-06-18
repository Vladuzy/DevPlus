import styled from "styled-components";

export const MainDashboard = styled.main`
  background: var(--verde);
`;

export const MainContainer = styled.main`
  height: 88vh;
  background-color: var(--cinza-claro);

  border-top-left-radius: 30px;
`;

export const Container = styled.section`
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
` 

export const TitleContainer = styled.div`
  height: 38px;

  display: flex;
  align-items: center;
  gap: 30px;

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

    display:flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      width: 25px;
      height:25px;
    }
  }
`

export const HabitsListContainer = styled.div`
  height: 70%;
  width: 100%;
` 