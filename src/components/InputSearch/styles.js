import styled from "styled-components";
import Search from "../../assets/search.svg";

export const Container = styled.div`
  width: 70vw;
  height: 40px;
  margin-top: 20px;
  background: var(--cinza-claro);
  border-radius: 20px;
  border: none;
  margin-left: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  background: url(${Search});
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const InputStyled = styled.input`
  width: 148px;
  height: 30px;
  margin-left: 5px;
  background: transparent;
  border: none;
  color: var(--branco);
  font-size: 1.2rem;
  &::placeholder {
    color: var(--branco);
    font-size: 1rem;
    padding-left: 5px;
  }
`;
