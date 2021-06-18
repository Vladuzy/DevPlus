import styled from "styled-components";
import { motion } from 'framer-motion'

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
`;

export const ButtonCheck = styled.button`
  background-color: transparent;
  border: none;

  .check {
    color: green;
    font-size: 1.7rem;
    font-weight: bold;
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
`;
