import styled from "styled-components";
import { motion } from "framer-motion";

export const MainDashboard = styled.main`
  background: var(--verde);
`;

export const HeaderContainer = styled.header`
  height: 10vh;
  background: none;

  display: flex;
  align-items: center;

  h2 {
    width: 100px;
    font-size: 24px;
    color: var(--cinza-escuro);
    margin-left: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MainContainer = styled.main`
  background-color: var(--cinza-escuro);

  border-top-left-radius: 30px;
`;
export const GroupNameContainer = styled.h2`
  margin: 10px 0;
  color: var(--branco);
  font-size: 18px;
  text-align: center;
`;
export const DividerContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid var(--cinza-claro);
`;

export const MainMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const NavContainer = styled.nav`
  margin: 10px 0 15px 0;
  height: 2rem;
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
  width: ${(props) => (props.atv ? "140px" : "100px")};
  border: 1px solid var(--verde);

  position: absolute;
  bottom: -10px;
`;
