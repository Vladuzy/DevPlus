import styled from "styled-components";
import { motion } from "framer-motion";

export const ActivitiesListContainer = styled(motion.main)`
  margin: 30px auto 0;
  :last-child {
    margin-bottom: 137px;
  }
  width: 100%;
  /* margin: 0 auto; */

  @media (min-width: 768px) {
    margin:0;
    :last-child {
      margin-bottom: 0;
    }
    .infinite-scroll-component__outerdiv{
      width:99%;
      height:100%;
    }
    height: 74%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
