import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Link } from "react-router-dom";
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
} from "./style.js";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";

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

  const handleForm = ({ username, email, password }) => {
    const addUser = { username, email, password };
    api
      .post("/users/", addUser)
      .then((response) => {
        console.log(response);
        toast.success("Cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
        history.push("/login");
      })
      .catch((e) =>
        toast.error(" Usuário ou Email já cadastrado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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
        <Input placeholder="email *" register={register} name="email"></Input>
        <Input
          type="password"
          placeholder="senha *"
          register={register}
          name="password"
        ></Input>
        <Input
          type="password"
          placeholder="confirmar senha"
          register={register}
          name="passwordConfirm"
        ></Input>
        <Button type="submit">CADASTRAR</Button>
      </FormContainer>
      <FooterContainer>
        <TitleFooterContainer>Já possui conta?</TitleFooterContainer>
        <SubTitleFooterContainer>
          <Link to={"/login"}>LOGAR-SE</Link>
        </SubTitleFooterContainer>
      </FooterContainer>
    </Container>
  );
};
export default FormRegister;
