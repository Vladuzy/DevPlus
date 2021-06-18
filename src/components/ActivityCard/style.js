import styled from "styled-components";
import { motion } from "framer-motion";

export const ActivityCardContainer = styled(motion.section)`
  width: 100%;
  /* max-width: 380px; */
  /* height: 85px; */
  padding: 10px;
  /* margin:10px; */
  /* margin-bottom:10px; */
  margin: 0 auto 20px;
  background-color: var(--cinza-claro);
  min-height: 82px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 758px) {
    background-color: var(--cinza-escuro);
    height: 121px;
    border: var(--vermelho) solid 2px;
    width: 300px;
    border-radius: 20px;
    background-color: var(--cinza-escuro);
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContainerEdition = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoContainer = styled.section`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: var(--branco);
    font-size: 1.5rem;
  }

  h3 {
    color: var(--amarelo);
    font-size: 12px;
    margin: 10px 0;
  }

  h4 {
    color: var(--branco);
    font-size: 12px;
  }
  @media (min-width: 758px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
`;

export const ButtonClose = styled.button`
  width: 15%;
  background-color: transparent;
  border: none;
  display: flex;

  .close {
    color: red;
    font-size: 1.7rem;
    font-weight: bold;
  }
  @media (min-width: 758px) {
    background-color: var(--vermelho);
    border-radius: 20px;
    color: var(--branco);
    width: 117px;
    height: 27px;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonCheck = styled.button`
  background-color: transparent;
  border: none;

  .check {
    color: green;
    font-size: 1.7rem;
    font-weight: bold;
  }
  @media (min-width: 758px) {
    background-color: var(--verde);
    border-radius: 20px;
    color: var(--branco);
    width: 117px;
    height: 27px;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonUncheck = styled.button`
  width: 15%;
  background-color: transparent;
  border: none;

  .uncheck {
    color: yellow;
    font-size: 1.7rem;
    font-weight: bold;
  }
  @media (min-width: 758px) {
    background: var(--amarelo);
    width: 147px;
    height: 33px;
    border-radius: 20px;
    color: var(--cinza-escuro);
  }
`;
