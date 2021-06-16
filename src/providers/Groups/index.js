import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";
import { useAuth } from "../AuthProvider";

export const GroupsContext = createContext();

export const GroupsProviders = ({ children }) => {
  const { token } = useAuth();
  const [groups, setGroups] = useState([]);
  const [groupsSubs, setGroupsSubs] = useState([]);
  const [groupId, setGroupId] = useState(() => {
    return parseInt(localStorage.getItem("@DevelopingHabitus:groupId")) || "";
  });

  const getGroups = () => {
    api
      .get("groups/?category=DevelopingHabitus")
      .then((response) => setGroups([...response.data.results]));
  };

  useEffect((_) => {
    getGroups();
  }, []);

  const subsInAGroup = () => {
    console.log(groupId);
    api
      .post(`/groups/${groupId}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI0Mjk1ODg4LCJqdGkiOiI0MjIxMjhjMmZjZDM0OTgyOWYxZWQ5NzgzMmNjOThhYiIsInVzZXJfaWQiOjcxOX0.1Rq4pBuHPn-KCSh9AE3SRLjVEvgAPxcVRUJaRWYM99w`,
        },
      })
      .then((_) => {
        getGroups();
        getGroupsSubs();
        toast.success("Mais uma Aventura ;)", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
      })
      .catch((_) =>
        toast.success("Você já faz parte da aventura", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        })
      );
  };

  const createGroup = (data) => {
    console.log(data);
    api
      .post("/groups/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getGroups();
        getGroupsSubs();
        setGroups([...groups, response.data]);
        toast.success("Grupo criado com sucesso!!!", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
      })
      .catch((err) => {
        toast.error("erro ao criar o grupo, tente novamente!");
      });
  };

  const getGroupsSubs = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroupsSubs([...response.data]));
  };

  useEffect(
    (_) => {
      getGroupsSubs();
    },
    [token]
  );

  const editGroups = (data) => {
    api
      .patch(`/groups/${groupId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getGroups();
        getGroupsSubs();
        toast.success("Sucesso ao editar grupo!");
      })
      .catch((_) => toast.error("Erro ao editar grupo."));
  };

  const unsubscribe = () => {
    console.log(groupId);

    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getGroups();
        getGroupsSubs();
        toast.success("Sucesso ao sair do grupo!", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        groupsSubs,
        getGroups,
        subsInAGroup,
        createGroup,
        getGroupsSubs,
        editGroups,
        unsubscribe,
        setGroupId,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
