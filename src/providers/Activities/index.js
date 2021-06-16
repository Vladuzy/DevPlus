import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useAuth } from "../AuthProvider";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { token } = useAuth();
  const [activities, setActivities] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:activities")) || [];
  });
  const [groupId, setGroupId] = useState("")

  const createActivities = (data) => {
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => getGroupActivities(groupId))
      .catch((err) => console.log(err));
  };

  const getGroupActivities = (id="") => {
    setGroupId(id)

    // if(group !== undefined){
    //   groupId = group.id
    // }else{
    //   groupId = 2;
    // }
    if(id !==""){
      api
      .get(`/activities/?group=${id}`)
      .then((response) => {
        // verificar no console os dados do response
        setActivities(response.data.results);
        localStorage.setItem( "@DevelopingHabitus:activities", JSON.stringify(response.data.results));
      })
      .catch((err) => console.log(err));
    }
  };

  const patchActivities = (activity, action) => {
    // const activityUpdate = {
    //   title: "Crossfit Atualizado",
    // };

    // Obtém a data/hora atual
    let data = new Date();

       //Mudança do data
    let activityUpdate = {
      realization_time: data.toISOString()
    }
    // if(activity.realization_time !== "" && action === "activate"){
    //   activityUpdate = {
    //         "realization_time": completeDate
    //   }
    // }else if(activity.realization_time === "" && action === "archieved"){
    //   activityUpdate = {
    //         "realization_time": completeDate
    //   }
    // }

    api
      .patch(`/activities/${activity.id}/`, activityUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => getGroupActivities(groupId))
      .catch((err) => console.log(err));
  };


  const patchSwitchArchived = (activity, action) => {
    
    let activityUpdate = {}

    if( action === "activate"){
      activityUpdate = {
          realization_time: "1000-10-10T00:00:00Z"
      }
    }else if(action === "archieved"){
      let data = new Date().toISOString();
      activityUpdate = {
            realization_time: data
      }
    }

    api
      .patch(`/activities/${activity.id}/`, activityUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => getGroupActivities(groupId))
      .catch((err) => console.log(err));
  };

  const deleteActivity = (activity) => {
    api
      .delete(`/activities/${activity.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => getGroupActivities(groupId))
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    getGroupActivities(groupId);
  }, [])

  useEffect(() => {
    getGroupActivities(groupId);
  }, [groupId]);

  return (
    <ActivitiesContext.Provider
      value={{ activities, getGroupActivities, createActivities, patchActivities, deleteActivity, patchSwitchArchived }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivity = () => useContext(ActivitiesContext);
