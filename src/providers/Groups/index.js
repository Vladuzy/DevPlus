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
  const [groupCreatorId, setGroupCreatorId] = useState("");
  const [group, setGroup] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:group")) || {};
  });

  const getGroups = () => {
    api
      .get("groups/?category=DevelopingH")
      .then((response) => setGroups([...response.data.results]));
  };

  useEffect((_) => {
    getGroups();
    getGroupsSubs();
  }, []);

  const subsInAGroup = () => {
    api
      .post(`/groups/${groupId}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getGroups();
        getGroupsSubs();
        toast.success("Mais uma Aventura ;)", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
      })
      .catch((_) =>
        toast.success("Você já faz parte da aventura ;)", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        })
      );
  };

  const createGroup = (data) => {
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
      .then((response) => {
        setGroupsSubs([...response.data]);
      } );
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
        getGroup(groupId);
        toast.success("Sucesso ao editar grupo!");
      })
      .catch((err) => {
        console.log(err)
        toast.error("Erro ao editar grupo.")
      });
  };

  const unsubscribe = () => {

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

  const getGroup = (id) => {
    api
    .get(`/groups/${id}/`)
    .then((res) => {
      setGroup(res.data);
      localStorage.setItem( "@DevelopingHabitus:group", JSON.stringify(res.data));
      localStorage.setItem( "@DevelopingHabitus:groupCreatorId", JSON.stringify(res.data.creator.id));
      setGroupCreatorId(res.data.creator.id);
    })
    .catch(err=>console.log(err))
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
        unsubscribe,
        setGroupId,
        getGroup,
        group,
        groupCreatorId
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
