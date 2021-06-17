import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GroupsContext } from "../../providers/Groups";
import ButtonAdd from "../Buttons/ButtonAdd";
import GroupsCard from "../GroupsCard";
import { ContainerListGroup } from "./style";
export default function GroupList({ allGroups, search }) {
  const { groups, groupsSubs } = useContext(GroupsContext);
  const history = useHistory();
  const handleGroups = (value) => {
    history.push(value);
  };
  return (
    <ContainerListGroup>
      {search === "" && allGroups
        ? groups.map((element, index) => (
            <GroupsCard
              key={index}
              currentGroup={element}
              title={element.name}
              description={element.description}
              language={element.category}
            />
          ))
        : null}
      {allGroups !== true && search === ""
        ? groupsSubs.map((element, index) => (
            <GroupsCard
              key={index}
              currentGroup={element}
              title={element.name}
              description={element.description}
              language={element.category}
            />
          ))
        : null}
      {search !== "" && allGroups
        ? groups
            .filter(
              (element) =>
                element.name.toUpperCase().includes(search.toUpperCase()) ===
                true
            )
            .map((element, index) => {
              return (
                <GroupsCard
                  key={index}
                  currentGroup={element}
                  title={element.name}
                  description={element.description}
                  language={element.category}
                />
              );
            })
        : null}
      {search !== "" && allGroups !== true
        ? groupsSubs
            .filter(
              (element) =>
                element.name.toUpperCase().includes(search.toUpperCase()) ===
                true
            )
            .map((element, index) => {
              return (
                <GroupsCard
                  key={index}
                  currentGroup={element}
                  title={element.name}
                  description={element.description}
                  language={element.category}
                />
              );
            })
        : null}
      <ButtonAdd type="Grupo" onClick={() => handleGroups("/creation/Grupo")} />
    </ContainerListGroup>
  );
}
