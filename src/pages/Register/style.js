import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--cinza-escuro);
  @media (min-width: 758px) {
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;
export const TitleContainer = styled.h1`
  color: var(--branco);
  font-size: 30px;
  padding: 7px;
  @media (min-width: 758px) {
    margin: 0 auto;
  }
`;
export const SubTitleContainer = styled.h3`
  color: var(--amarelo);
  font-size: 15px;
  padding: 7px;
  @media (min-width: 758px) {
    margin: 0 auto;
  }
`;

export const HeaderContainer = styled.section`
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 40px;
  @media (min-width: 758px) {
    margin: 0 auto;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 260px;
  margin-top: 37px;
`;
export const SpanFormContainer = styled.span`
  color: var(--vermelho);
  font-size: 1rem;
  margin-left: 63px;
`;

export const FooterContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-left: 23px;
`;

export const TitleFooterContainer = styled.h4`
  color: var(--branco);
  font-size: 13px;
  margin-right: 5px;
`;

export const SubTitleFooterContainer = styled.p`
  color: var(--verde);
  font-size: 13px;
  height: 14px;
  font-style: normal;
  font-weight: normal;

  a {
    color: var(--verde);
  }
`;
