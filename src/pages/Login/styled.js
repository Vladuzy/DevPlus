import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--cinza-escuro);
    height: 100vh;
`;
export const TitleContainer = styled.h1`
    color: var(--branco);
    font-size: 30px;
    padding: 7px;
    width: 226px;
    height: 41px;
    font-weight: normal;
    font-style: normal;
    font-family: "Roboto";
`;

export const SubTitleContainer = styled.h3`
    color: var(--amarelo);
    font-size: 15px;
    line-height: 18px;
    padding: 7px;
    width: 126px;
    height: 22px;
    font-family: Roboto;
    font-style: normal;
    font-weight:700;
`;

export const HeaderContainer = styled.section`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 40px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 221px;
    height: 133px;
    margin: 84px auto 0;
`;

export const FooterContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    margin-left: 23px;
    font-family: "Roboto";
`;

export const TitleFooterContainer = styled.h4`
    color: var(--branco);
    font-size: 13px;
    height: 14px;
    font-style: normal;
    font-weight: normal;
    margin-right: 5px;
`;

export const SubTitleFooterContainer = styled.p`
    color: var(--verde);
    font-size: 13px;
    height: 14px;
    font-style: normal;
    font-weight: normal;
    margin-right: 5px;

    a{
        color: var(--verde)
    }
`;