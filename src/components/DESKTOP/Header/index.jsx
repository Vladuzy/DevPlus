import Button from "../../Buttons/Button";
import { useHistory } from "react-router-dom";
import {
  LogoContainer,
  ButtonNavContainer,
  HeaderContainer,
  GroupSVG,
  LogoutSVG,
  ListSVG,
} from "./styles";
import { useAuth } from "../../../providers/AuthProvider";
const Header = ({ type }) => {
  const history = useHistory();
  const { setIsAuthenticated } = useAuth();
  const handleAlternRoutes = (value) => {
    history.push(value);
  };
  const handleCloseApplication = (value) => {
    setIsAuthenticated(false)
    localStorage.clear();
    history.push(value);
  };

  return (
    <HeaderContainer value={type}>
      <LogoContainer>
        <h2>DEV PLUS</h2>
      </LogoContainer>
      <ButtonNavContainer>
        <Button onClick={() => handleAlternRoutes("/dashboard")}>
          HABITOS <ListSVG />
        </Button>
        <Button onClick={() => handleAlternRoutes("/groups")}>
          GRUPOS <GroupSVG />
        </Button>
        <Button onClick={() => handleCloseApplication("/")}>
          LOG-OUT <LogoutSVG />
        </Button>
      </ButtonNavContainer>
    </HeaderContainer>
  );
};

export default Header;
