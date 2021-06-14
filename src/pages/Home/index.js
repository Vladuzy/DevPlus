import React from "react";
import {
  Container,
  HeaderStyles,
  ContactContainer,
  MainStyles,
} from "./styles";
import { FiAlignJustify } from "react-icons/fi";
import Buttons from "../../components/Button";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

import Activity from "../Activity";

export default function Home() {
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const handleClick = (value) => {
    history.push(value);
  };

  if (isAuthenticated === true) {
    console.log("ta autenticado");
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Activity/>
      <HeaderStyles>
        <h4>Habbits lifes</h4>
        <input id="check" type="checkbox" />
        <ContactContainer>
          <p>Contato</p>
          <p>comunidade</p>
          <p>Recursos</p>
        </ContactContainer>
        <label for="check">
          <FiAlignJustify />
        </label>
      </HeaderStyles>
      <MainStyles>
        <h1>Habbits app</h1>
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
