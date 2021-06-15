import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";

import { MenuFooterImg, FooterContainer } from "./style";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
const MenuFooter = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const handleClick = (value) => {
    sendTo(value);
  };

  const handleCloseApplication = (value) => {
    setIsAuthenticated(false);
    localStorage.clear();
    sendTo(value);
  };

  console.log(history);

  return (
    <FooterContainer>
      {isAuthenticated && (
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
      )}
    </FooterContainer>
  );
};
export default MenuFooter;
