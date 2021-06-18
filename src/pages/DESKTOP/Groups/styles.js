import styled from 'styled-components'
import Search from "../../../assets/search_green.svg";

export const MainGroups = styled.main`
  background-color: ${({ type }) => type === 'All' ? 'var(--amarelo)' : 'var(--verde)'};
`

export const MainContainer = styled.main`
  min-height: 88vh;
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
  height: 88vh;
  border-top-left-radius: 30px;
  background: var(--cinza-claro);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`