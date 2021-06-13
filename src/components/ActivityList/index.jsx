import ActivityCard from "../ActivityCard";

import { useActivity } from "../../providers/Activities";

import {
  ActivityListContainer,
  HeaderContainer,
  TitleContainer,
} from "./style";

const ActivityList = () => {
  const { activies, patchActivies } = useActivity();

  console.log(activies);

  return (
    <HeaderContainer>
      <TitleContainer>- Voltar</TitleContainer>
      <ActivityListContainer>
        {activies.map((activity) => {
          return (
            <ActivityCard activity={activity} patchActivies={patchActivies} />
          );
        })}
      </ActivityListContainer>
    </HeaderContainer>
  );
};

export default ActivityList;
