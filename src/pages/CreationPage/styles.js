import styled from "styled-components";

export const BackgroundContainer = styled.main`
  background: var(--amarelo);
`;

export const HeaderContainer = styled.header`
  /* height: 10vh; */
  background: none;

  display: flex;
  align-items: center;

  h2 {
    width: 100px;
    font-size: 24px;
    color: var(--cinza-escuro);
    margin-left: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MainContainer = styled.main`
  /* height: 90vh; */
  background-color: var(--cinza-escuro);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-left-radius: 30px;
`;

export const TitleCreatingContainer = styled.h2`
  font-weight: 300;
  margin: 10px 0;
  color: var(--branco);
`;

export const DividerContainer = styled.div`
  margin: 0 auto 20px auto;
  width: 80%;
  border: 1px solid var(--cinza-claro);
`;
