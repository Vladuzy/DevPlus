import styled from 'styled-components'
import Search from "../../../assets/search_green.svg";

export const MainGroups = styled.main`
  background-color: ${({ type }) => type === 'All' ? 'var(--amarelo)' : 'var(--verde)'};
`

export const MainContainer = styled.main`
  height: 88vh;
  background-color: var(--cinza-escuro);
  border-top-left-radius: 30px;

  display: flex;
`

export const SelectContainer = styled.section`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
` 

export const GroupsSelectContainer = styled.div`
  width: 80%;
  height: 100%;
  min-width: 430px;
  border: 1px solid red;
`

export const TitleGroupSelectContainer = styled.div`
  width: 100%;
  height: 130px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    color: var(--branco);
    font-size: 30px;
    font-weight: 300;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > div {
    margin: 0;
    height: 32px;
    width: 225px;
    background: none;
    border: 3px solid var(--cinza-claro);

    input {
      margin: 0;
      color: var(--branco);
      font-size: 14px;
      padding-left: 15px;
    }

    & > div {
      background: ${({ type }) => type === 'Mine' && `url(${Search})`};
    }
  }
`

export const SelectTypeContainer = styled.select`
  width: 120px;
  height: 32px;
  background: none;
  border: 3px solid var(--cinza-claro);
  border-radius: 5px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: var(--branco);
  padding-left: 15px;
  font-weight: 300;

  option {
    background-color: var(--cinza-escuro);
  }
`

export const SelectedContainer = styled.section`
  width: 60%;
  height: 100%;
  border-top-left-radius: 30px;
  background: var(--cinza-claro);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const TitleSelectedContainer = styled.div`
  height: 50px;

  display: flex;
  align-items: center;
  
  h2 {
    flex-grow: 1;
    color: var(--branco);
    font-weight: 300;
    font-size: 30px;
    text-align: center;
  }

  button {
    width: ${({ group }) => group ? '140px' : '160px'};
    height: 35px;
    border-radius: 10px;
    border: ${({ group }) => group ? '2px solid var(--verde)' : '2px solid var(--amarelo)'};
    background: none;
    color: ${({ group }) => group ? 'var(--verde)' : 'var(--amarelo)'};
    margin-left: 30px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const SomethingSelectedContainer = styled.section`
  height: calc(47% - 25px);
`

export const TitleSomethingSelectedContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 30px;

  h2 {
    margin-left: 30px;
    color: var(--branco);
    font-weight: 300;
  }

  button {
    width: ${({ meta }) => meta ? '125px' : '150px'} ;
    height: 30px;
    border: 2px solid var(--verde);
    border-radius: 10px;
    background: none;
    color: var(--verde);

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const GroupContentContainer = styled.div`
  height: calc(100% - 40px);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  svg {
    color: ${({ type }) => type === 'All' ? 'var(--amarelo)' : 'var(--verde)'};
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .disabled {
    color: rgba(33, 52, 58, 0.8) ;
  }
`

export const ContentContainer = styled.div`
  height: 100%;
  width: 90%;
  border: 1px solid green;
`
