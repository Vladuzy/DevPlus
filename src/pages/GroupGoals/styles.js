import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.main`
  background-color: var(--cinza-escuro);

  border-top-left-radius: 30px;
`;
export const MainMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const DividerContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid var(--cinza-claro);
`;

export const NavContainer = styled.nav`
  height: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    width: 80px;
    text-align: center;
    font-size: 15px;
    color: var(--branco);

    position: relative;
  }
`;

export const AnimationContainer = styled(motion.div)`
  width: 80px;
  border: 1px solid var(--verde);

  position: absolute;
  bottom: -10px;
`;
