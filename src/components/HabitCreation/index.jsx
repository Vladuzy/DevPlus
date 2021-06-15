import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHabits } from '../../providers/Habits'
import { useAuth } from '../../providers/AuthProvider'

import Input from '../Input'
import Button from '../Button'

import { FormContainer, ErrorSpanContainer, InputContainer } from './styles'

const HabitCreation = () => {
  const { id } = useAuth()
  const { createHabits } = useHabits()
  const formSchemaHabit = yup.object().shape({
    title: yup.string()
      .required('Campo Obrigatório.')
      .max(20, 'Máximo de 20 caracteres.'),

    category: yup.string()
      .required('Campo Obrigatório.')
      .max(20, 'Máximo de 20 caracteres.'),

    difficulty: yup.string()
      .required('Campo Obrigatório.'),

    frequency: yup.string()
      .required('Campo Obrigatório.'),

  })
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(formSchemaHabit)
  })

  const onSubmitData = (data) => {
    const achieved = false
    const how_much_achieved = 0
    const user = id
    const newData = {...data, achieved, how_much_achieved, user}
    createHabits(newData)
  }

  return(
    <FormContainer onSubmit={handleSubmit(onSubmitData)}>
      <InputContainer>
        <Input 
          register={register}
          name="title"
          placeholder={"Titúlo do Habito"}
        />
        {errors.title?.message && <ErrorSpanContainer>{errors.title?.message}</ErrorSpanContainer>}
      </InputContainer>
      <InputContainer>
        <Input 
          register={register}
          name="category"
          placeholder={"Categoria"}
        />
        {errors.category?.message && <ErrorSpanContainer>{errors.category?.message}</ErrorSpanContainer>}
      </InputContainer>
      <InputContainer>
      <Input 
          register={register}
          name="difficulty"
          placeholder={"Dificuldade"}
        />
        {errors.difficulty?.message && <ErrorSpanContainer>{errors.difficulty?.message}</ErrorSpanContainer>}
      </InputContainer>
      <InputContainer>
        <Input 
          register={register}
          name="frequency"
          placeholder={"Frequência"}
        />
        {errors.frequency?.message && <ErrorSpanContainer>{errors.frequency?.message}</ErrorSpanContainer>}
      </InputContainer>
      <Button>Criar Habito</Button>
    </FormContainer>
  )
}

export default HabitCreation