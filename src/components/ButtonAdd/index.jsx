import { IoIosAddCircle } from "react-icons/io";
import { ButtonADD } from "./style";

const ButtonAdd = ({ ...rest }) => {
  return (
    <ButtonADD {...rest}>
      <IoIosAddCircle className="ButtonADD"></IoIosAddCircle>
    </ButtonADD>
  );
};
export default ButtonAdd;
