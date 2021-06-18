import styled from "styled-components";

export const BackgroundContainer = styled.main`
  position: absolute;
  bottom: 50%;
  left:50%;
  transform: translate(-50%,50%);
  background-color: rgba(33, 52, 58, 0.7);
  z-index:2;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const PopUpSection = styled.section`
  border-radius: 20px;
  width: 450px;
  height: 380px;
  background-color: ${({ type }) => type === 'Grupo' ? 'var(--amarelo)' : 'var(--verde)'};
  position: relative;

  display: flex;
  flex-wrap: wrap;

  h2 {
    padding-top: 15px;
    color: var(--cinza-escuro);
    font-weight: 300;
    text-align: center;
    flex-grow: 1;
  }

  & > svg {
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: rgba(248, 86, 93, 0.75);
  }
`

export const PopUpDivisor = styled.div`
  width: 100%;
  height: 80%;
  background-color: var(--cinza-escuro);

  display: flex;
  justify-content: center;
  align-items: center;
`