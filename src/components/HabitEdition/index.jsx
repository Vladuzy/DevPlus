import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHabits } from "../../providers/Habits";

import Input from "../Input";
import Button from "../Buttons/Button";
import { useHistory } from "react-router-dom";

import {
  FormContainer,
  ErrorSpanContainer,
  InputContainer,
  SelectContainer,
} from "./styles";
import { useAuth } from "../../providers/AuthProvider";

const HabitEdition = ({ cardId }) => {
  const history = useHistory();
  const { updateTextHabits } = useHabits();
  const habit = { id: cardId };
  const formSchemaHabit = yup.object().shape({
    title: yup
      .string()
      .required("Campo Obrigatório.")
      .max(20, "Máximo de 20 caracteres."),

    category: yup
      .string()
      .required("Campo Obrigatório.")
      .max(20, "Máximo de 20 caracteres."),

    difficulty: yup
      .string()
      .required("Campo Obrigatório.")
      .oneOf(["Fácil", "Médio", "Difícil"], "Escolha uma das 3 opções."),

    frequency: yup.string().required("Campo Obrigatório."),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaHabit),
  });

  const onSubmitData = (data) => {
    updateTextHabits(data, habit.id);
    history.push("/dashboard");
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitData)}>
      <InputContainer>
        <Input
          register={register}
          name="title"
          placeholder={"Titúlo do Habito"}
        />
        {errors.title?.message && (
          <ErrorSpanContainer>{errors.title?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      <InputContainer>
        <Input register={register} name="category" placeholder={"Categoria"} />
        {errors.category?.message && (
          <ErrorSpanContainer>{errors.category?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      <InputContainer>
        <SelectContainer {...register("difficulty")}>
          <option value=""></option>
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
        </SelectContainer>
      </InputContainer>
      <InputContainer>
        <Input
          register={register}
          name="frequency"
          placeholder={"Frequência"}
        />
        {errors.frequency?.message && (
          <ErrorSpanContainer>{errors.frequency?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      <Button>Editar Habito</Button>
    </FormContainer>
  );
};

export default HabitEdition;
