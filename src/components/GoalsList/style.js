import styled from "styled-components";
import { motion } from "framer-motion";

export const GoalsListContainer = styled(motion.main)`
  margin: 30px auto 0;
  width: 100%;
  :last-child {
    margin-bottom: 137px;
  }
  /* margin: 0 auto; */
  @media (min-width: 768px) {
    :last-child {
      margin-bottom: 0;
    }
    .infinite-scroll-component__outerdiv{
      width:99%;
      height:100%;
    }
    height: 74%;
    margin:0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
