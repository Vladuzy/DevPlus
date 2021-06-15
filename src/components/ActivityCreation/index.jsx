import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActivity } from "../../providers/Activities";

import Input from "../Input";
import Button from "../Buttons/Button";

import {
  FormContainer,
  ErrorSpanContainer,
  InputContainer,
  CalendarInput,
} from "./styles";

const AtivityCreation = ({ id }) => {
  const { createActivities } = useActivity();
  const formSchemaHabit = yup.object().shape({
    title: yup
      .string()
      .required("Campo Obrigatório.")
      .max(20, "Máximo de 20 caracteres."),

    realization_time: yup.string().required("Campo Obrigatório."),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaHabit),
  });

  const onSubmitData = (data) => {
    const group = id;
    const newData = { ...data, group };
    createActivities(newData);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitData)}>
      <InputContainer>
        <Input
          register={register}
          name="title"
          placeholder={"Titúlo da Meta"}
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
        {errors.realization_time?.message && (
          <ErrorSpanContainer>
            {errors.realization_time?.message}
          </ErrorSpanContainer>
        )}
      </InputContainer>
      <Button>Criar Atividade</Button>
    </FormContainer>
  );
};

export default AtivityCreation;
