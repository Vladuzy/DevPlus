import { FaEdit } from "react-icons/fa";
import { ButtonEditContainer } from "./style";
const ButtonEdit = ({ ...rest }) => {
  return (
    <ButtonEditContainer type="button" {...rest}>
      <FaEdit className="edit"></FaEdit>
    </ButtonEditContainer>
  );
};
export default ButtonEdit;
