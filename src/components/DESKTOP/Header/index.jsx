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

const Header = ({ type }) => {
  const history = useHistory();

  const handleAlternRoutes = (value) => {
    history.push(value);
  };
  const handleCloseApplication = (value) => {
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
        <Button onClick={() => handleCloseApplication("/login")}>
          LOG-OUT <LogoutSVG />
        </Button>
      </ButtonNavContainer>
    </HeaderContainer>
  );
};

export default Header;
