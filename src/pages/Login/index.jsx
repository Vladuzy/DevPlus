import Button from "../../components/Buttons/Button";
import ButtonBack from "../../components/Buttons/ButtonBack";
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
  SpanFormContainer,
} from "./styled";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import User2 from "../../assets/boneco.svg";
import Password from "../../assets/password.svg";
// import ButtonAdd from "../../components/ButtonAdd";

const Login = () => {
  const { handleLogin, isAuthenticated } = useAuth();
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório*"),

    password: yup.string().required("Campo Obrigatório*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory("/dashboard");

  const onSubmitFunction = (data) => {
    handleLogin(data, jwt_decode, history, toast);
  };

  if (isAuthenticated === true) {
    return <Redirect to="/dashboard" />;
  }

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
          icon={User2}
          iconType="email"
        />
        <SpanFormContainer>{errors.username?.message}</SpanFormContainer>

        <Input
          register={register}
          name={"password"}
          type={"password"}
          placeholder={"Senha"}
          error={errors.password?.message}
          icon={Password}
          iconType="password"
        />
        <SpanFormContainer>{errors.password?.message}</SpanFormContainer>
        <Button type={"submit"}>CONECTE-SE</Button>
      </FormContainer>
      <FooterContainer>
        <TitleFooterContainer>Não possui conta?</TitleFooterContainer>
        <SubTitleFooterContainer>
          <Link to={"/register"}>REGISTRE-SE</Link>
        </SubTitleFooterContainer>
      </FooterContainer>
      <ButtonBack onClick={() => history.goBack()}></ButtonBack>
    </Container>
  );
};

export default Login;
