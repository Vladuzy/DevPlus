import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import axios from "axios";
import {
  Container,
  SubTitleContainer,
  TitleContainer,
  FormContainer,
  FooterContainer,
  TitleFooterContainer,
  SubTitleFooterContainer,
  HeaderContainer,
} from "./style.js";
import Input from "../../components/Input";
import Button from "../../components/Button";

const FormRegister = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(7, "Minimo de 7 digitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes")
      .required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .get("https://kabit-api.herokuapp.com/users/", data)
      .then((response) => {
        console.log(response);
        reset();
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>Bem vindo!</TitleContainer>
        <SubTitleContainer>Cadastre-se agora!</SubTitleContainer>
      </HeaderContainer>
      <FormContainer onSubmit={handleSubmit(handleForm)}>
        <Input placeholder="nome *" register={register} name="username"></Input>
        <Input placeholder="email *" register={register} name="email"></Input>
        <Input
          placeholder="senha *"
          register={register}
          name="password"
        ></Input>
        <Input
          placeholder="confirmar senha"
          register={register}
          name="passwordConfirm"
        ></Input>
        <Button type="submit">CADASTRAR</Button>
      </FormContainer>
      <FooterContainer>
        <TitleFooterContainer>Já possui conta?</TitleFooterContainer>
        <SubTitleFooterContainer>LOGAR-SE</SubTitleFooterContainer>
      </FooterContainer>
    </Container>
  );
};
export default FormRegister;
