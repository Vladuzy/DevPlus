import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import axios from "axios";
import { Container } from "./style.js";

const FormRegister = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(7, "Minimo de 7 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .post("https://kabit-api.herokuapp.com/users/", data)
      .then((response) => {
        console.log(response);
        reset();
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <section className="Header-Container">
        <header>
          <h3>Bem vindo!</h3>
          <h4>Cadastre-se agora!</h4>
        </header>
      </section>
      <form onSubmit={handleSubmit(handleForm)}>
        <input placeholder="nome *" {...register("username")}></input>
        <input placeholder="email *" {...register("email")}></input>
        <input placeholder="senha *" {...register("password")}></input>
        <input placeholder="confirmar senha"></input>
        <button type="submit">CADASTRAR</button>
      </form>
    </Container>
  );
};
export default FormRegister;
