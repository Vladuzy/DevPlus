import ActivityCard from "../ActivityCard";

import { useActivity } from "../../providers/Activities";

import {
  ActivitiesListContainer
} from "./style";

const ActivityList = () => {
  const { activities, patchActivities } = useActivity();

  console.log(activities);

  return (
      <ActivitiesListContainer>
        {activities.map((activity) => {
          return (
            <ActivityCard activity={activity} patchActivities={patchActivities} />
          );
        })}
      </ActivitiesListContainer>
  );
};

export default ActivityList;
