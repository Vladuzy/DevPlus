import { BiLogOut } from "react-icons/bi";
import { ButtonOpen } from "./style";
import { useHistory } from "react-router-dom";
import { useGroups } from "../../../providers/Groups";
const ButtonOpenGroup = ({ ...rest }) => {
  const { subsInAGroup } = useGroups();
  const history = useHistory();
  const handleOpenGroup = (value) => {
    history.push(value);
    subsInAGroup();
  };
  return (
    <ButtonOpen
      type="submit"
      {...rest}
      onClick={() => handleOpenGroup("/groups/all")}
    >
      <h2>Entrar no Grupo</h2>
      <BiLogOut className="FigureButton"></BiLogOut>
    </ButtonOpen>
  );
};
export default ButtonOpenGroup;
