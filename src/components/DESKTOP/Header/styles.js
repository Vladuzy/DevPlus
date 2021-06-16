import styled from 'styled-components'
import Group from '../../../assets/group.svg'
import Logout from '../../../assets/logout.svg'
import List from '../../../assets/view_list.svg'

export const LogoContainer = styled.div`
  margin-left: 30px;
  width: 170px;
  height: 55px;
  border-radius: 20px;
  border: 5px solid var(--cinza-escuro);
  
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 30px;
    font-weight: 300;
  }
`

export const ButtonNavContainer = styled.nav`
  width: 600px;
  height: 60px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    color: rgba(48, 68, 77, 0.7);
    width: 160px;
    border: 3px solid var(--cinza-escuro);
    background: none;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const HeaderContainer= styled.header`
  height: 12vh;
  display:flex;
  background-color: var(--verde);
  justify-content: space-between;
  align-items: center;
`

export const GroupSVG = styled.div`
  background: url(${Group});
  background-size: cover;
  width: 25px;
  height: 25px;
` 

export const LogoutSVG = styled.div`
  background: url(${Logout});
  background-size: cover;
  width: 25px;
  height: 25px;
` 

export const ListSVG = styled.div`
  background: url(${List});
  background-size: cover;
  width: 30px;
  height: 30px;
` 