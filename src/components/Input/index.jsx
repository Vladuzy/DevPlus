import { Container, ContainerImg, InputStyled } from "./styles";

const Input = ({ register, name, icon: Icon, iconType, ...rest }) => {
  return (
    <Container>
      <InputStyled {...register(name)} {...rest}></InputStyled>
      <ContainerImg icon={Icon} iconType={iconType} />
    </Container>
  );
};

export default Input;
