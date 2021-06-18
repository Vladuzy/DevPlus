import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";
import { useAuth } from "../AuthProvider";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { token } = useAuth();
  const [activities, setActivities] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("@DevelopingHabitus:activities")) || []
    );
  });

  const [activity, setActivity] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("@DevelopingHabitus:activity")) || {}
    );
  });

  const [groupId, setGroupId] = useState(() => {
    return parseInt(localStorage.getItem("@DevelopingHabitus:groupId")) || "";
  });

  const createActivities = (data) => {
    const fullData = { ...data, group: groupId };
    api
      .post("/activities/", fullData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getGroupActivities(groupId))
      .catch((err) => toast.error("Erro ao criar atividade"));
  };

  const getGroupActivities = (id = "") => {
    setGroupId(id);

    // if(group !== undefined){
    //   groupId = group.id
    // }else{
    //   groupId = 2;
    // }
    if (id !== "") {
      api
        .get(`/activities/?group=${id}`)
        .then((response) => {
          // verificar no console os dados do response
          setActivities(response.data.results);
          localStorage.setItem(
            "@DevelopingHabitus:activities",
            JSON.stringify(response.data.results)
          );
        })
        .catch((err) => toast.error("erro ao pegar grupos"));
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
      realization_time: data.toISOString(),
    };
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
      .then(() => getGroupActivities(groupId))
      .catch((err) => toast.error("erro ao editar atividade"));
  };

  const updateActivity = (data, id) => {
    api
      .patch(`/activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        getGroupActivities(groupId);
        getOneActivity(id);
        toast.success("alterado com sucesso!!");
      })
      .catch((_) =>
        toast.error("erro ao atualizar a atividade!", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        })
      );
  };

  const patchSwitchArchived = (activity, action) => {
    let activityUpdate = {};

    if (action === "activate") {
      activityUpdate = {
        realization_time: "1000-10-10T00:00:00Z",
      };
    } else if (action === "archieved") {
      let data = new Date().toISOString();
      activityUpdate = {
        realization_time: data,
      };
    }
    api
      .patch(`/activities/${activity.id}/`, activityUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getGroupActivities(groupId))
      .catch((err) => toast.error("erro ao arquivar atividade"));
  };

  const deleteActivity = (activity) => {
    api
      .delete(`/activities/${activity.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getGroupActivities(groupId))
      .catch((err) => toast.error("erro editar atividade"));
  };

  const getOneActivity = (activityId) => {
    api
      .get(`/activities/${activityId}/`)
      .then((response) => {
        localStorage.setItem(
          "@DevelopingHabitus:activity",
          JSON.stringify(response.data)
        );
        setActivity(response.data);
      })
      .catch((err) => toast.error("erro ao pegar atividade"));
  };

  useEffect(() => {
    getGroupActivities(groupId);
  }, []);

  useEffect(() => {
    getGroupActivities(groupId);
  }, [groupId]);

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        activity,
        getOneActivity,
        getGroupActivities,
        createActivities,
        patchActivities,
        updateActivity,
        deleteActivity,
        patchSwitchArchived,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivity = () => useContext(ActivitiesContext);
