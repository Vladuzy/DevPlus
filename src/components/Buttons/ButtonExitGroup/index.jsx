import { HiOutlineLogout } from "react-icons/hi";
import { ButtonExit } from "./style";
import { useHistory } from "react-router-dom";
import { useGroups } from "../../../providers/Groups";
const ButtonExitGroup = ({ ...rest }) => {
  const { unsubscribe } = useGroups();
  const history = useHistory();
  const handleExitGroup = (value) => {
    history.push(value);
    unsubscribe();
  };
  return (
    <ButtonExit
      type="submit"
      {...rest}
      onClick={() => handleExitGroup("/groups/all")}
    >
      <h2>Sair do Grupo</h2>
      <HiOutlineLogout className="FigureButton"></HiOutlineLogout>
    </ButtonExit>
  );
};
export default ButtonExitGroup;
