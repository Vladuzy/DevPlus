import Button from "../../components/Button"
import Input from "../../components/Input"

<<<<<<< HEAD
=======
import {
    Container, 
    HeaderContainer, 
    TitleContainer, 
    SubTitleContainer, 
    FormContainer,
    FooterContainer, 
    TitleFooterContainer, 
    SubTitleFooterContainer
} from "./styled"

>>>>>>> 3f9fec00906b3c1428ca076fbdf78661d14d136f
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

<<<<<<< HEAD
// import { Link, useHistory, Redirect } from "react-router-dom"
=======
import { Link, useHistory, Redirect } from "react-router-dom"
>>>>>>> 3f9fec00906b3c1428ca076fbdf78661d14d136f
import api from "../../services/index"

import jwt_decode from "jwt-decode";
// import { toast } from "react-toastify";

<<<<<<< HEAD
=======


>>>>>>> 3f9fec00906b3c1428ca076fbdf78661d14d136f
const Login = () => {

    const schema = yup.object().shape({
        username:
            yup.string()
                .required("Campo Obrigatório!!"),

        password:
            yup.string()
                // .min(8, "Mínimo de 8 dígitos")
                // .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                // "Sua senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({ resolver: yupResolver(schema) })

    // const history = useHistory("/dashboard");

    const onSubmitFunction = (data) => {
        api.post("/sessions/", data)
            .then( (reponse) => {
                const token = reponse.data.access;
                console.log(token)
                localStorage.setItem("@DevelopingHabitus:token", JSON.stringify(token));
                const decodedToken = jwt_decode(token);
                console.log(decodedToken)
                const id = decodedToken.user_id;
                console.log(id)
                localStorage.setItem("@DevelopingHabitus:user", JSON.stringify(id));
                // return history.push("/dashboard");
            })
            .catch( (err) => alert("Username ou senha inválidos!!"));
    }

    // if(isAuthenticated){
    //     return <Redirect to={"/dashboard"} />
    // }

    return(
<<<<<<< HEAD
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <label htmlFor="username"> Digite seu username </label>
            <Input
                register={register}
                name={"username"}
                placeholder={"Digite seu username"}
                error = {errors.username?.message}
            />

            <label htmlFor="password"> Digite sua senha </label>
            <Input
                register={register}
                name={"password"}
                type={"password"}
                placeholder={"Uma senha bem segura"}
                error = {errors.password?.message}
            />
            <Button type={"submit"} >Enviar</Button>
            {/* <p> Não tem uma conta? Faça seu <Link to={"/signup"}>cadastro</Link></p> */}
        </form>
=======
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
                    error = {errors.username?.message}
                />

                <Input
                    register={register}
                    name={"password"}
                    type={"password"}
                    placeholder={"Senha"}
                    error = {errors.password?.message}
                />
                <Button type={"submit"} >CONECTE-SE</Button>
            </FormContainer>
            <FooterContainer>
                <TitleFooterContainer>Não possui conta?</TitleFooterContainer>
                <SubTitleFooterContainer><Link to={"/register"}>REGISTRE-SE</Link></SubTitleFooterContainer>
             </FooterContainer>
        </Container>
        
>>>>>>> 3f9fec00906b3c1428ca076fbdf78661d14d136f
    )

}

export default Login;