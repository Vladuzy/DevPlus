import { Container } from "./styles";

const Button = ({ children, ...rest }) => {
  return (
    <Container type="submit" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
