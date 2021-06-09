// import Button
//import Input

import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import { Link, useHistory, Redirect } from "react-router-dom"
import api from "../../services/index"

const Login = ({}) => {

    const schema = yup.object().shape({
        email:
            yup.string()
                .email("E-mail inválido")
                .required("Campo Obrigatório!!"),

        password:
            yup.string()
                .min(8, "Mínimo de 8 dígitos")
                .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Sua senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({ resolver: yupResolver(schema) })

    // const history = useHistory();

    const onSubmitFunction = (data) => {
        api.post("/sessions/")
            .then( reponse => {
                const token = reponse.data.access;
                localStorage.setItem("@DevelopingHabitus:token", JSON.stringify(token));
                
            })
    }

}
