import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Container,
  HeaderContainer,
  TitleContainer,
  SubTitleContainer,
  FormContainer,
  FooterContainer,
  TitleFooterContainer,
  SubTitleFooterContainer,
} from "./styled";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../providers/AuthProvider'

import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const Login = () => {
  const { handleLogin } = useAuth()
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!!"),

    password: yup.string(),
    // .min(8, "Mínimo de 8 dígitos")
    // .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    // "Sua senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory("/dashboard");

  const onSubmitFunction = (data) => {
    handleLogin(data, jwt_decode, history, toast)
  };

  // if(isAuthenticated){
  //     return <Redirect to={"/dashboard"} />
  // }

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>Olá novamente!</TitleContainer>
        <SubTitleContainer>:&#x00029;</SubTitleContainer>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          register={register}
          name={"username"}
          placeholder={"Nome"}
          error={errors.username?.message}
        />

        <Input
          register={register}
          name={"password"}
          type={"password"}
          placeholder={"Senha"}
          error={errors.password?.message}
        />
        <Button type={"submit"}>CONECTE-SE</Button>
      </FormContainer>
      <FooterContainer>
        <TitleFooterContainer>Não possui conta?</TitleFooterContainer>
        <SubTitleFooterContainer>
          <Link to={"/register"}>REGISTRE-SE</Link>
        </SubTitleFooterContainer>
      </FooterContainer>
    </Container>
  );
};

export default Login;
