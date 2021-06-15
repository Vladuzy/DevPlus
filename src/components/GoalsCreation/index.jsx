import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoals } from '../../providers/Goals'

import Input from '../Input'
import Button from '../Button'

import { FormContainer, ErrorSpanContainer, InputContainer, SelectContainer } from './styles'

const GoalsCreation = ({ id }) => {
  const { createGoals } = useGoals()
  const formSchemaHabit = yup.object().shape({
    title: yup.string()
      .required('Campo Obrigatório.')
      .max(20, 'Máximo de 20 caracteres.'),

    difficulty: yup.string()
      .required('Campo Obrigatório.')
      .oneOf(['Fácil', 'Médio', 'Difícil'], 'Escolha uma das 3 opções.'),

  })
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(formSchemaHabit)
  })

  const onSubmitData = (data) => {
    const how_much_achieved = 0
    const group = id
    const newData = {...data, how_much_achieved, group}
    createGoals(newData)
  }

  return(
    <FormContainer onSubmit={handleSubmit(onSubmitData)}>
      <InputContainer>
        <Input 
          register={register}
          name="title"
          placeholder={"Titúlo da Meta"}
        />
        {errors.title?.message && <ErrorSpanContainer>{errors.title?.message}</ErrorSpanContainer>}
      </InputContainer>
      <InputContainer>
        <SelectContainer 
          {...register('difficulty')}
        >
          <option value=""></option>
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
        </SelectContainer>
        {errors.difficulty?.message && <ErrorSpanContainer>{errors.difficulty?.message}</ErrorSpanContainer>}
      </InputContainer>
      <Button>Criar Meta</Button>
    </FormContainer>
  )
}

export default GoalsCreation