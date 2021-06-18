import styled from "styled-components";
import { motion } from "framer-motion";

export const GoalCardContainer = styled(motion.section)`
  /* width: 320px; */
  /* max-width: 380px; */
  /* height: 85px; */
  padding: 10px;
  /* margin:10px; */
  /* margin-bottom:10px; */
  margin: 0 auto 10px;
  background-color: var(--cinza-claro);
  height: 82px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 758px) {
    background-color: var(--cinza-escuro);
    height: 130px;
    border: var(--vermelho) solid 2px;
    width: 420px;
    border-radius: 20px;
    background-color: var(--cinza-escuro);
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryContainer = styled.h3`
  color: var(--branco);
`;

export const InfoContainer = styled.section`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: var(--amarelo);
  }

  h4 {
    color: var(--branco);
    font-size: 12px;
  }
`;

export const ContainerActivies = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
`;

export const ButtonConluds = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  .ButtonEdit {
    margin-right: 0px;
  }
  @media (min-width: 758px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const TitleCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 758px) {
    width: 0px;
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

export const ProgressBar = styled.div`
  height: 18px;
  background-color: #ccc;
  position: relative;
  border-radius: 20px;
  width: 95%;

  span {
    width: ${(props) => props.progress + "%"};
    position: absolute;
    height: 100%;
    background-color: #0fd410;
    border-radius: 20px;
  }
`;
