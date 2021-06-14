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

  const handleCloseApplication = () => {
    localStorage.clear();
    sendTo("/");
  };

  return (
    <MenuFooterImg>
      <HiUserGroup className="figure"></HiUserGroup>

      <AiFillHome className="figure"></AiFillHome>

      <IoLogOut onClick={handleCloseApplication} className="figure"></IoLogOut>
    </MenuFooterImg>
  );
};
export default MenuFooter;
