import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { HiUserGroup, HiOutlineUserGroup } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import { MenuFooterImg, FooterContainer } from "./style";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
const MenuFooter = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [inHome, setInHome] = useState(true)
  const [inGroups, setInGroups] = useState(false)
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

  const handleSwitchToHome = () => {
    setInHome(true);
    setInGroups(false);
  }

  const handleSwitchToGroups = () =>{
    setInHome(false);
    setInGroups(true);
  }

  return (
    <FooterContainer>
      {isAuthenticated && (
        <MenuFooterImg>

          {
            (inGroups) ? (
              <HiUserGroup
                onClick={() => {handleClick("/groups"); handleSwitchToGroups()}}
                className="figure"
              ></HiUserGroup>
            ) : (
              <HiOutlineUserGroup

                onClick={() => {handleClick("/groups"); handleSwitchToGroups()}}
                className="figure"
              ></HiOutlineUserGroup>
            )
          }
      
          {
            (inHome) ?  (
              <AiFillHome
                onClick={() =>  {handleClick("/dashboard"); handleSwitchToHome()} }
                className="figure"
              ></AiFillHome>
            ) : (
              <AiOutlineHome
                onClick={() => {handleClick("/dashboard"); handleSwitchToHome()}}
                className="figure"
              ></AiOutlineHome>
            )
          } 
         
          <IoLogOutOutline
            onClick={() => handleCloseApplication("/") }
            className="figure"
          ></IoLogOutOutline>
        </MenuFooterImg>
      )}
    </FooterContainer>
  );
};
export default MenuFooter;
