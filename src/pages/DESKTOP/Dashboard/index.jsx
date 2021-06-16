import { MainDashboard, MainContainer, ActiveContainer,ActiveTitleContainer } from "./styles"
import HabitsList from "../../../components/HabitsList"
import Button from "../../../components/Buttons/Button"

const DashboardDesktop = () => {
  return(
    <MainDashboard>
      <MainContainer>
        <ActiveContainer>
          <ActiveTitleContainer>
            <h2>ATIVOS</h2>
            <Button>Novo Habito</Button>
          </ActiveTitleContainer>
          <HabitsList />
        </ActiveContainer>
      </MainContainer>
    </MainDashboard>
  )
}

export default DashboardDesktop