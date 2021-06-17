import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoals } from "../../providers/Goals";

import Input from "../Input";
import Button from "../Buttons/Button";

import {
  FormContainer,
  ErrorSpanContainer,
  InputContainer,
  SelectContainer,
} from "./styles";
import { useHistory } from "react-router-dom";

const GoalsEdition = ({ cardId }) => {
  const history = useHistory();
  const { updateGoals } = useGoals();
  const formSchemaHabit = yup.object().shape({
    title: yup
      .string()
      .required("Campo Obrigatório.")
      .max(15, "Máximo de 15 caracteres."),

    difficulty: yup
      .string()
      .required("Campo Obrigatório.")
      .oneOf(["Fácil", "Médio", "Difícil"], "Escolha uma das 3 opções."),
    how_much_achieved: yup
      .number()
      .required("Campo Obrigatório.")
      .max(100, "Maximo progressão de 100%"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaHabit),
  });

  const onSubmitData = (data) => {
    updateGoals(data, cardId);
    history.goBack();
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
        <SelectContainer {...register("difficulty")}>
          <option value=""></option>
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
        </SelectContainer>
        {errors.difficulty?.message && (
          <ErrorSpanContainer>{errors.difficulty?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      <InputContainer>
        <Input
          register={register}
          name="how_much_achieved"
          placeholder={"de 0 a 100 em progressão"}
          type="number"
        />
        {errors.title?.message && (
          <ErrorSpanContainer>{errors.title?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      <Button>Editar Meta</Button>
    </FormContainer>
  );
};

export default GoalsEdition;
