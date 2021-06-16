import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";
import { useAuth } from "../AuthProvider";

export const GroupsContext = createContext();

export const GroupsProviders = ({ children }) => {
  const { token } = useAuth();
  const [groups, setGroups] = useState([]);
  const [groupsSubs, setGroupsSubs] = useState([]);
  const [groupId] = useState(() => {
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
    api
      .post(`/groups/${groupId}/subscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("usuario inserido no grupo"))
      .catch((_) => toast.error("usuario já está no grupo"));
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
        getGroupsSubs();
        toast.success("Sucesso ao editar grupo!");
      })
      .catch((_) => toast.error("Erro ao editar grupo."));
  };

  const unsubscribe = () => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getGroupsSubs();
        toast.success("Sucesso ao sair grupo!");
      })
      .catch((_) => toast.error("Erro ao sair grupo."));
  }

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
        unsubscribe
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
