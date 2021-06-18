import {
  MainDashboard,
  MainContainer,
  Container,
  TitleContainer,
  HabitsContainer,
  HabitsListContainer,
} from "./styles";
import Button from "../../../components/Buttons/Button";
import Header from "../../../components/DESKTOP/Header";
import {
  IoIosAddCircle,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import HabitsList from "../../../components/HabitsList";
import DisplayPopUp from "../../../components/DESKTOP/DisplayPopUp";

import { useState } from "react";

const DashboardDesktop = () => {
  const [creationOpen, setCreationOpen] = useState(false);

  return (
    <>
      {creationOpen && (
        <DisplayPopUp
          setCreationOpen={setCreationOpen}
          close={setCreationOpen}
          type="Habito"
        />
      )}
      <MainDashboard>
        <Header />
        <MainContainer>
          <Container>
            <TitleContainer>
              <h2>ATIVOS</h2>
              <Button onClick={() => setCreationOpen(true)}>
                <IoIosAddCircle />
                Novo Habito
              </Button>
            </TitleContainer>
            <HabitsContainer>
              <IoIosArrowDropleftCircle className="disabled" />
              <HabitsListContainer>
                <HabitsList showArchived={false}></HabitsList>
                {/* Importa aqui o card */}
              </HabitsListContainer>
              <IoIosArrowDroprightCircle />
            </HabitsContainer>
          </Container>
          <Container>
            <TitleContainer>
              <h2>FEITOS</h2>
            </TitleContainer>
            <HabitsContainer>
              <IoIosArrowDropleftCircle className="disabled" />
              <HabitsListContainer>
                <HabitsList showArchived={true}></HabitsList>
              </HabitsListContainer>
              <IoIosArrowDroprightCircle />
            </HabitsContainer>
          </Container>
        </MainContainer>
      </MainDashboard>
    </>
  );
};

export default DashboardDesktop;
