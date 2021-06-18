import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 65vh;
  h1 {
    color: var(--amarelo);
  }
  .user-icon {
    font-size: 13rem;
    color: var(--verde);
  }
  .figure-profile {
    width: 31.33px;
    height: 28.33px;
    color: var(--verde);
  }
`;

export const InfoNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
