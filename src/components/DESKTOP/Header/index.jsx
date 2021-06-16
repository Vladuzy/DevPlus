import Button from "../../Buttons/Button"
import { LogoContainer, ButtonNavContainer, HeaderContainer, GroupSVG, LogoutSVG, ListSVG } from './styles'

const Header = () => {
  return(
    <HeaderContainer>
      <LogoContainer>
        <h2>DEV PLUS</h2>
      </LogoContainer>
      <ButtonNavContainer>
        <Button>HABITOS <ListSVG /></Button>
        <Button>GRUPOS <GroupSVG /></Button>
        <Button>LOG-OUT <LogoutSVG /></Button>
      </ButtonNavContainer>
    </HeaderContainer>
  )
}

export default Header