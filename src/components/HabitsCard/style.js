import styled from "styled-components";

export const HabitCardContainer = styled.div`
  width: 320px;
    /* max-width: 380px; */
    /* height: 85px; */
    padding: 10px;
    /* margin:10px; */
    /* margin-bottom:10px; */
    margin: 0 auto 10px;
    background-color: var(--cinza-claro);

    display: flex;
    justify-content: space-around;
`;

export const ButtonClose = styled.button`
    width: 15%;
    background-color: transparent;
    border: none;
    display: flex;

    .close{
        color: red;
        font-size: 1.7rem;
        font-weight: bold;
    }
`

export const InfoContainer = styled.section`
    width: 240px;

    h2{
        color: var(--branco);
        font-size: 15px;
        margin-bottom: 10px;
    }

    h4{
        color: var(--branco);
        font-size: 12px;
    }
`

export const FlexContainer = styled.div`
  display: flex;
`

export const DificultyContainer = styled.h3`
    color: ${props => (props.difficulty === "Fácil") ? 
                (
                  "var(--verde)" 
                ) : (props.difficulty === "Difícil") ?
                  (
                    "var(--vermelho)" 
                  ) : (
                    "var(--amarelo)" 
                  )};
    font-size: 12px;
    margin: 0 10px 10px 0;
`

export const ButtonCheck = styled.button`
    width: 15%;
    background-color: transparent;
    border: none;

  .check{
      color: green;
      font-size: 1.7rem;
      font-weight: bold;
  }
`

export const ButtonUncheck = styled.button`
    width: 15%;
    background-color: transparent;
    border: none;

    .uncheck{
        color: yellow;
        font-size: 1.7rem;
        font-weight: bold;
    }
`

export const ProgressBar = styled.div`
    height: 25px;
    background-color: #CCC;
    position: relative;

    span{
        width: ${props => props.progress + "%"};
        position: absolute;
        height: 100%;
        background-color: #0fd439;
    }

`