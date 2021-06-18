import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActivity } from "../../providers/Activities";
import { useHistory } from "react-router-dom";
import Input from "../Input";
import Button from "../Buttons/Button";
import { FormContainer, ErrorSpanContainer, InputContainer } from "./styles";

const AtivityCreation = ({ id }) => {
  const { createActivities } = useActivity();

  const history = useHistory();

  const formSchemaHabit = yup.object().shape({
    title: yup
      .string()
      .required("Campo Obrigatório.")
      .max(15, "Máximo de 15 caracteres."),

    // realization_time: yup.string().required("Campo Obrigatório."),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaHabit),
  });

  const onSubmitData = (data) => {
    const realization_time = "1000-10-10T00:00:00Z";
    const newData = { ...data, realization_time };
    createActivities(newData);
    history.goBack();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitData)}>
      <InputContainer>
        <Input
          register={register}
          name="title"
          placeholder={"Titúlo da Atividade"}
        />
        {errors.title?.message && (
          <ErrorSpanContainer>{errors.title?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      {/* <InputContainer>
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
      </InputContainer> */}
      <Button>Criar Atividade</Button>
    </FormContainer>
  );
};

export default AtivityCreation;
