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
    :last-child {
      margin-bottom: 0;
    }
    height: 43%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
