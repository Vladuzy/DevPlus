import ActivityCard from "../ActivityCard";

import { useActivity } from "../../providers/Activities";

import { ActivitiesListContainer } from "./style";

const ActivityList = ({showArchived}) => {
  const { activities, patchActivities, deleteActivity, patchSwitchArchived } = useActivity();

  return (
      <ActivitiesListContainer>
        {
          (showArchived)?(
            activities.map((activity) => 
             
              (
                (  Date.parse(activity.realization_time) !== Date.parse("1000-10-10T00:00:00Z") ) && (
                  <ActivityCard 
                    showArchived={true} 
                    activity={activity} 
                    patchActivities={patchActivities} 
                    deleteActivity={deleteActivity}
                    patchSwitchArchived = {patchSwitchArchived}
                  />
                )
              ))
          ) : (
            activities.map((activity) => 
            (
              (Date.parse(activity.realization_time) === Date.parse("1000-10-10T00:00:00Z")) && (
                <ActivityCard 
                  showArchived={false} 
                  activity={activity} 
                  deleteActivity={deleteActivity} 
                  patchActivities={patchActivities} 
                  patchSwitchArchived = {patchSwitchArchived}
                />
              )
           ))
          )
        }
    </ActivitiesListContainer>
  );
};

export default ActivityList;
