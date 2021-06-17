import styled from "styled-components";
import { motion } from "framer-motion";

export const MainDashboard = styled.main`
  background: var(--amarelo);
`;

export const HeaderContainer = styled.header`
  background: none;
  height: 48px;
  display: flex;
  align-items: center;

  h2 {
    color: var(--cinza-escuro);
    margin-left: 2rem;
  }
`;

export const MainContainer = styled.main`
  background-color: var(--cinza-escuro);

  border-top-left-radius: 30px;
`;
export const MainMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const NavContainer = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    width: 100px;
    text-align: center;
    font-size: 22px;
    color: var(--branco);

    position: relative;
  }
`;

export const AnimationContainer = styled(motion.div)`
  width: 100px;
  border: 1px solid var(--amarelo);

  position: absolute;
  bottom: -10px;
`;
