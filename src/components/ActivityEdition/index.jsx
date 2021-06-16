import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Buttons/Button";
import { useActivity } from "../../providers/Activities";

import {
    FormContainer,
    ErrorSpanContainer,
    InputContainer,
    CalendarInput,
} from "./styles";

const ActivityEdition = ({ id }) => {
    const { updateActivity } = useActivity()
    const formSchemaActivity = yup.object().shape({
    title: yup
        .string()
        .required("Campo Obrigatório.")
        .max(20, "Máximo de 20 caracteres."),
    realization_time: yup.string()
    });
    const {
    handleSubmit,
    register,
    formState: { errors },
    } = useForm({
    resolver: yupResolver(formSchemaActivity),
    });

    const onSubmitData = (data) => {
    const { title, realization_time } = data
    let changes = {}
    if(realization_time === ''){
        changes = {
            title: title,
        }
        updateActivity(changes, id)
    }else{
        changes = {
            title: title,
            realization_time: realization_time
        }
        updateActivity(changes, id)
    }
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmitData)}>
        <InputContainer>
        <Input
            register={register}
            name="title"
            placeholder={"Titúlo da atividade"}
        />
        {errors.title?.message && (
            <ErrorSpanContainer>{errors.title?.message}</ErrorSpanContainer>
        )}
        </InputContainer>
        <InputContainer>
            <CalendarInput
                register={register}
                name="realization_time"
                placeholder={"Dia da Realização"}
                type="datetime-local"
            />
        </InputContainer>
        <Button>Editar Atividade</Button>
    </FormContainer>
);
};

export default ActivityEdition;