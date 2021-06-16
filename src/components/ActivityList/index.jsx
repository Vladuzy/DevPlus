import ActivityCard from "../ActivityCard";

import { useActivity } from "../../providers/Activities";

import { ActivitiesListContainer } from "./style";

const ActivityList = ({ showArchived }) => {
  const { activities, patchActivities } = useActivity();

  return (
    <ActivitiesListContainer>
      {showArchived
        ? activities.map(
            (activity) =>
              activity.realization_time === "" &&
              console.log(activity.realization_time)
            // <ActivityCard activity={activity} patchActivities={patchActivities} />
          )
        : activities.map(
            (activity) =>
              activity.realization_time !== "" && (
                <ActivityCard
                  activity={activity}
                  patchActivities={patchActivities}
                />
              )
          )}
    </ActivitiesListContainer>
  );
};

export default ActivityList;
