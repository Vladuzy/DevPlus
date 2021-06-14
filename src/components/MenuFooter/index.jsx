import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { MenuFooterImg } from "./style";
import { useHistory } from "react-router-dom";
const MenuFooter = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const handleClick = (value) => {
    sendTo(value);
  };

  const handleCloseApplication = (value) => {
    localStorage.clear();
    sendTo(value);
  };

  return (
    <MenuFooterImg>
      <HiUserGroup
        onClick={() => handleClick("/groups")}
        className="figure"
      ></HiUserGroup>

      <AiFillHome
        onClick={() => handleClick("/dashboard")}
        className="figure"
      ></AiFillHome>

      <IoLogOut
        onClick={() => handleCloseApplication("/")}
        className="figure"
      ></IoLogOut>
    </MenuFooterImg>
  );
};
export default MenuFooter;
