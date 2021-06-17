import ActivityCard from "../ActivityCard";
import { useHistory } from "react-router";
import { useActivity } from "../../providers/Activities";
import ButtonAdd from "../Buttons/ButtonAdd";
import { ActivitiesListContainer } from "./style";
import {useAuth} from "../../providers/AuthProvider"
import { useRef } from 'react'

const ActivityList = ({showArchived}) => {
  const { activities, patchActivities, deleteActivity, patchSwitchArchived } = useActivity();
  const history = useHistory();
  const {isSubscribe} = useAuth();
  //ANIMATION
  const limit = useRef(null)
  
  const handleActivity = (value) => {
    history.push(value);
  };
  return (
      <ActivitiesListContainer ref={limit}>
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
                    limit={limit}
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
                  limit={limit}
                />
              )
           ))
          )
        }
       {/* handleGroups("/creation/Grupo") */}
       {(!showArchived && isSubscribe) && (
      <ButtonAdd type="Atividade" onClick={() => handleActivity("/creation/Atividade")} />
      )}
    </ActivitiesListContainer>
    
  );
};

export default ActivityList;
