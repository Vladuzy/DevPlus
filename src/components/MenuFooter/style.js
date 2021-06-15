import styled from "styled-components";

export const MenuFooterImg = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--cinza-claro);
  border-radius: 20px 20px 0px 0px;
  height: 65px;
  width: 100%;
  border-style: none;
  .figure {
    width: 37.5px;
    height: 31.87px;
    color: var(--verde);
  }
`;

export const BackFooterImg = styled.button`
  .backArrow {
    width: 37.5px;
    height: 31.87px;
  }
`;

export const FooterContainer = styled.div`
  background-color: var(--cinza-escuro);
`;
