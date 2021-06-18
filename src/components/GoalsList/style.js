import styled from "styled-components";
import { motion } from 'framer-motion'

export const GoalsListContainer = styled(motion.main)`
  margin: 30px auto 0;
  width: 100%;
  :last-child {
    margin-bottom: 137px;
  }
  /* margin: 0 auto; */
  @media (min-width: 768px){
    :last-child {
    margin-bottom: 0;
   }
  }
`
