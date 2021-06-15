import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGroups } from "../../providers/Groups";

import Input from "../Input";
import Button from "../Buttons/Button";

import { FormContainer, ErrorSpanContainer, InputContainer } from "./styles";

const GroupEdition = ({ id }) => {
  const { editGroups } = useGroups();
  const formSchemaGroup = yup.object().shape({
    name: yup.string().max(20, "Máximo de 20 caracteres."),

    description: yup.string().max(20, "Máximo de 20 caracteres."),

    category: yup.string(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaGroup),
  });

  const onSubmitData = (data) => {
    console.log(data);
    id = 579;
    editGroups(data, id);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitData)}>
      <InputContainer>
        <Input register={register} name="name" placeholder={"Nome do Grupo"} />
        {errors.name?.message && (
          <ErrorSpanContainer>{errors.name?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      <InputContainer>
        <Input
          register={register}
          name="description"
          placeholder={"Descrição"}
        />
        {errors.description?.message && (
          <ErrorSpanContainer>{errors.description?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      <InputContainer>
        <Input register={register} name="category" placeholder={"Categoria"} />
        {errors.category?.message && (
          <ErrorSpanContainer>{errors.category?.message}</ErrorSpanContainer>
        )}
      </InputContainer>
      <Button>Salvar Alterações</Button>
    </FormContainer>
  );
};

export default GroupEdition;
