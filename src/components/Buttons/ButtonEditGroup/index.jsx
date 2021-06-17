import { RiEdit2Fill } from "react-icons/ri";
import { ButtonEdit } from "./style";
import { useHistory } from "react-router-dom";
const ButtonEditGroup = ({ ...rest }) => {
  return (
    <ButtonEdit type="submit" {...rest}>
      <RiEdit2Fill className="FigureButton"></RiEdit2Fill>
    </ButtonEdit>
  );
};
export default ButtonEditGroup;
