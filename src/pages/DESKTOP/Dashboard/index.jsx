import { MainDashboard, MainContainer, Container, TitleContainer, HabitsContainer, HabitsListContainer } from "./styles"
import Button from "../../../components/Buttons/Button"
import Header from '../../../components/DESKTOP/Header'
import { IoIosAddCircle, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const DashboardDesktop = () => {
  return(
    <MainDashboard>
      <Header />
      <MainContainer>
        <Container>
          <TitleContainer>
            <h2>ATIVOS</h2>
            <Button><IoIosAddCircle />Novo Habito</Button>
          </TitleContainer>
          <HabitsContainer>
            <IoIosArrowDropleftCircle className='disabled'/>
            <HabitsListContainer>
              <p>HABITOS ATIVOS</p>
            </HabitsListContainer>
            <IoIosArrowDroprightCircle />
          </HabitsContainer>
        </Container>
        <Container>
          <TitleContainer>
            <h2>FEITOS</h2>
          </TitleContainer>
          <HabitsContainer>
            <IoIosArrowDropleftCircle className='disabled'/>
            <HabitsListContainer>
              <p>HABITOS FEITOS</p>
            </HabitsListContainer>
            <IoIosArrowDroprightCircle />
          </HabitsContainer>
        </Container>
      </MainContainer>
    </MainDashboard>
  )
}

export default DashboardDesktop