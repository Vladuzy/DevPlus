import styled from "styled-components";

export const GoalCardContainer = styled.section`
  /* width: 320px; */
  /* max-width: 380px; */
  /* height: 85px; */
  padding: 10px;
  /* margin:10px; */
  /* margin-bottom:10px; */
  margin: 0 auto 10px;
  background-color: var(--cinza-claro);
  height: 82px;
  display: flex;
  justify-content: space-around;
`;

export const CategoryContainer = styled.h3`
  color: var(--verde);
`;

export const InfoContainer = styled.section`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: var(--amarelo);
  }

  h4 {
    color: var(--branco);
    font-size: 12px;
  }
`;

export const ButtonConluds = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  .ButtonEdit {
    margin-right: 0px;
  }
`;

export const TitleCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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

export const ProgressBar = styled.div`
  height: 25px;
  background-color: #ccc;
  position: relative;
  border-radius: 20px;

  span {
    width: ${(props) => props.progress + "%"};
    position: absolute;
    height: 100%;
    background-color: #0fd439;
  }
`;
