import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Buttons/Button";
import { useHistory } from "react-router-dom";
import {
  FormContainer,
  ErrorSpanContainer,
  InputContainer
} from "./styles";

import { useAuth } from "../../providers/AuthProvider";

const ProfileEdition = ({ cardId }) => {
  const {updateUserInfo} = useAuth();
    console.log(updateUserInfo)
  const history = useHistory();

  const formSchemaActivity = yup.object().shape({
    username: yup
      .string()
      .required("Campo Obrigatório.")
      .max(15, "Máximo de 15 caracteres.")
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaActivity),
  });

  const onSubmitData = (data) => {
      console.log(updateUserInfo)
    updateUserInfo(data)
    history.goBack();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitData)}>
      <InputContainer>
        <Input
          register={register}
          name="username"
          placeholder={"Novo username"}
        />
        {errors.username?.message && (
          <ErrorSpanContainer>{errors.username?.message}</ErrorSpanContainer>
        )}
      </InputContainer>

      <Button>Editar Username</Button>
    </FormContainer>
  );
};

export default ProfileEdition;
