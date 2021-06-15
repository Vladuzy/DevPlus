import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  MenuFooterImg,
  BackFooterImg,
  FooterContainer,
  TitleFooter,
} from "./style";
import { useHistory, Redirect } from "react-router-dom";
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

  const handleGoBack = () => {
    sendTo(history.goBack());
  };
  console.log(history);

  return (
    <FooterContainer>
      {isAuthenticated ? (
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
      ) : (
        <BackFooterImg>
          <IoMdArrowRoundBack
            onClick={handleGoBack}
            className="backArrow"
          ></IoMdArrowRoundBack>
          <TitleFooter>Voltar</TitleFooter>
        </BackFooterImg>
      )}
    </FooterContainer>
  );
};
export default MenuFooter;
