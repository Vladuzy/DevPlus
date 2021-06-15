import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GroupsContext } from "../../providers/Groups";
import ButtonAdd from "../ButtonAdd";
import GroupsCard from "../GroupsCard";

export default function GroupList({ allGroups, search }) {
  const { groups, groupsSubs } = useContext(GroupsContext);
  const history = useHistory("/creation");
  return (
    <>
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
            .filter((element) => element.name.includes(search) === true)
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
            .filter((element) => element.name.includes(search) === true)
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
      {/* {allGroups !== true ? <ButtonAdd onClick={() => history()} /> : null} */}
    </>
  );
}
