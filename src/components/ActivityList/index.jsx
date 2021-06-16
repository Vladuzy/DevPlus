import ActivityCard from "../ActivityCard";
import { useHistory } from "react-router";
import { useActivity } from "../../providers/Activities";
import ButtonAdd from "../Buttons/ButtonAdd";
import { ActivitiesListContainer } from "./style";

const ActivityList = ({showArchived}) => {
  const { activities, patchActivities, deleteActivity, patchSwitchArchived } = useActivity();
  const history = useHistory();
  const handleActivity = (value) => {
    history.push(value);
  };
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
       {/* handleGroups("/creation/Grupo") */}
       {!showArchived && (
      <ButtonAdd type="Atividade" onClick={() => handleActivity("/creation/Atividade")} />
      )}
    </ActivitiesListContainer>
    
  );
};

export default ActivityList;
