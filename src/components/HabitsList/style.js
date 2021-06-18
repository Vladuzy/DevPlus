import styled from "styled-components";
import { motion } from "framer-motion";

export const HabitsContainer = styled(motion.div)`
  :last-child {
    margin-bottom: 137px;
  }
  margin: 30px auto 0;
  width: 100%;
  @media (min-width: 758px) {
    height: 43%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    height: 43%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
