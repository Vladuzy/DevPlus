import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";

export const GroupsContext = createContext();

export const GroupsProviders = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [groupsSubs, setGroupsSubs] = useState([]);

  const getGroups = () => {
    api.get("groups/?category=programming")
      .then((response) => setGroups([...response.data.results]));
  };

  useEffect(_ => {
    getGroups()
  },[])

  const subsInAGroup = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, {
        headers: {
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
        },
      })
      .then((_) => toast.success("usuario inserido no grupo"))
      .catch((_) => toast.error("usuario já está no grupo"));
  };

  const createGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
        },
      })
      .then((response) => {
        setGroups([...groups, ...response]);
        toast.success("grupo criado com sucesso!!! :)");
      })
      .catch((_) => toast.error("erro ao criar o grupo, tente novamente!"));
  };

  const getGroupsSubs = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
        },
      })
      .then((response) => setGroupsSubs([...response.data]));
  };

  useEffect(_ => {
    getGroupsSubs()
  },[])

  return (
    <GroupsContext.Provider
      value={{
        groups,
        groupsSubs,
        getGroups,
        subsInAGroup,
        createGroup,
        getGroupsSubs,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
