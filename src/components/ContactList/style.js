import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 30vh;
  color: var(--verde);
  h1 {
    font-size: 50px;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 30px;
  width: 170px;
  height: 55px;
  border-radius: 20px;
  border: 5px solid var(--cinza-escuro);

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 30px;
    font-weight: 300;
  }
`;
