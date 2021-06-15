import styled from "styled-components";

export const BackFooterImg = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--cinza-claro);
  border-radius: 20px 20px 20px 20px;
  height: 35px;
  width: 115px;
  border-style: none;
  position: absolute;
  bottom: 67px;
  left: 17px;
  .backArrow {
    width: 37.5px;
    height: 31.87px;
    color: var(--cinza-escuro);
  }
`;

export const TitleFooter = styled.h2`
  color: var(--cinza-escuro);
`;
