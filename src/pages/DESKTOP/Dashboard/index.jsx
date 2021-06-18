import {
  MainDashboard,
  MainContainer,
  Container,
  TitleContainer,
  HabitsListContainer,
} from "./styles";
import Button from "../../../components/Buttons/Button";
import Header from "../../../components/DESKTOP/Header";
import { IoIosAddCircle } from "react-icons/io";

import HabitsList from "../../../components/HabitsList";
import DisplayPopUp from "../../../components/DESKTOP/DisplayPopUp";
import { useAuth } from "../../../providers/AuthProvider";
import { useHabits } from '../../../providers/Habits'
import { useState } from "react";
import { Redirect } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";
import { Scrollbars } from 'react-custom-scrollbars-2';

const DashboardDesktop = () => {
  const { doingHabits } = useHabits() 
  const active = doingHabits.filter(({ achieved }) => achieved === false).length
  const done = doingHabits.filter(({ achieved }) => achieved === true).length

  const [creationOpen, setCreationOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === false) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      {creationOpen && (
        <DisplayPopUp
          setCreationOpen={setCreationOpen}
          close={setCreationOpen}
          type="Habito"
          edit={edit}
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
            <HabitsListContainer id='ScrollContainer' style={{ overflow: "auto" }}>
              <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                <InfiniteScroll
                  inverse={true}
                  dataLength={active}
                  scrollableTarget='ScrollContainer'
                >
                  <HabitsList
                    setEdit={setEdit}
                    setCreationOpen={setCreationOpen}
                    showArchived={false}
                  ></HabitsList>
                </InfiniteScroll>
              </Scrollbars>
            </HabitsListContainer>
          </Container>
          <Container>
            <TitleContainer>
              <h2>FEITOS</h2>
            </TitleContainer>
            <Scrollbars >
            <HabitsListContainer >
              
                <InfiniteScroll
                  inverse={true}
                  dataLength={active}
                >
                  <HabitsList
                    setEdit={setEdit}
                    setCreationOpen={setCreationOpen}
                    showArchived={true}
                  ></HabitsList>
                </InfiniteScroll>
              
            </HabitsListContainer>
            </Scrollbars>
          </Container>
        </MainContainer>
      </MainDashboard>
    </>
  );
};

export default DashboardDesktop;
