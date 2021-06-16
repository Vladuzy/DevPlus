import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Link, Redirect } from "react-router-dom";
import api from "../../services";
import {
  Container,
  SubTitleContainer,
  TitleContainer,
  FormContainer,
  FooterContainer,
  TitleFooterContainer,
  SubTitleFooterContainer,
  HeaderContainer,
  SpanFormContainer,
} from "./style.js";
import Input from "../../components/Input";
import Button from "../../components/Buttons/Button";
import { toast } from "react-toastify";
import { useAuth } from "../../providers/AuthProvider";
import ButtonBack from "../../components/Buttons/ButtonBack";

const FormRegister = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório*"),
    email: yup.string().email("Email inválido").required("Campo obrigatório*"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos*")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório*"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes")
      .required("Senha obrigatória*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  if (isAuthenticated === true) {
    return <Redirect to="/dashboard" />;
  }

  const handleForm = ({ username, email, password }) => {
    const addUser = { username, email, password };
    api
      .post("/users/", addUser)
      .then((response) => {
        console.log(response);
        toast.success("Cadastrado com sucesso!", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
        reset();
        history.push("/login");
      })
      .catch((e) =>
        toast.error(" Usuário ou Email já cadastrado!", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        })
      );
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>Bem vindo!</TitleContainer>
        <SubTitleContainer>Cadastre-se agora!</SubTitleContainer>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(handleForm)}>
        <Input placeholder="nome *" register={register} name="username"></Input>
        <SpanFormContainer>{errors.username?.message}</SpanFormContainer>
        <Input placeholder="email *" register={register} name="email"></Input>
        <SpanFormContainer>{errors.email?.message}</SpanFormContainer>
        <Input
          type="password"
          placeholder="senha *"
          register={register}
          name="password"
        ></Input>
        <SpanFormContainer>{errors.password?.message}</SpanFormContainer>
        <Input
          type="password"
          placeholder="confirmar senha"
          register={register}
          name="passwordConfirm"
        ></Input>
        <SpanFormContainer>{errors.passwordConfirm?.message}</SpanFormContainer>
        <Button type="submit">CADASTRAR</Button>
      </FormContainer>
      <FooterContainer>
        <TitleFooterContainer>Já possui conta?</TitleFooterContainer>
        <SubTitleFooterContainer>
          <Link to={"/login"}>LOGAR-SE</Link>
        </SubTitleFooterContainer>
      </FooterContainer>
      <ButtonBack></ButtonBack>
    </Container>
  );
};
export default FormRegister;
