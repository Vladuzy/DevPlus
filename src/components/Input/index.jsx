import { Container, ContainerImg, InputStyled } from "./styles";

const Input = ({ register, name, icon: Icon, ...rest }) => {
  return (
    <Container>
      <InputStyled {...register(name)} {...rest}></InputStyled>
      <ContainerImg icon={Icon} />
    </Container>
  );
};

export default Input;
