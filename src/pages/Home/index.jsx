import React from "react";
import {
  Container,
  HeaderStyles,
  ContactContainer,
  MainStyles,
  LogoContainer,
} from "./styles";
import { FiAlignJustify } from "react-icons/fi";
import Buttons from "../../components/Buttons/Button";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import ProfileEdition from "../../components/ProfileEdition";

export default function Home() {
  const history = useHistory();
  const { isAuthenticated } = useAuth();
  const handleClick = (value) => {
    history.push(value);
  };

  if (isAuthenticated === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <HeaderStyles>
        <LogoContainer>
          <h2>DEV PLUS</h2>
        </LogoContainer>
        <input id="check" type="checkbox" />
        <ContactContainer>
          <Buttons onClick={() => handleClick("/contact")} className="Contato">
            Contato
          </Buttons>
        </ContactContainer>
        <label for="check">
          <FiAlignJustify />
        </label>
      </HeaderStyles>
      <MainStyles>
        <h1>Habits app</h1>
        <h2>Venha fazer parte da nossa familia!</h2>
        <p>
          {" "}
          o melhor jeito de você organizar os seus habitos e com uma otima
          comunidade!
        </p>
        <div>
          <Buttons onClick={() => handleClick("/register")}>
            Fazer Cadastro
          </Buttons>
          <Buttons onClick={() => handleClick("/login")}>Fazer Login</Buttons>
        </div>
      </MainStyles>
    </Container>
  );
}
