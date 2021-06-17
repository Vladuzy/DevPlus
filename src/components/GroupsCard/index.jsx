import React from "react";
import { Container, ImgContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useActivity } from "../../providers/Activities";
import { useGoals } from "../../providers/Goals";
import { useAuth } from "../../providers/AuthProvider";
import { useGroups } from "../../providers/Groups";
export default function GroupsCard({
  currentGroup,
  title,
  description,
  language,
}) {
  const { setGroupId, getGroup } = useGroups();
  const { id } = useAuth();

  const { getGroupActivities } = useActivity();

  const { getGoals } = useGoals();

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const subscribe =
    "" + currentGroup.users_on_group.some((element) => element.id === id);

  const handleClick = (value) => {
    getGroupActivities(currentGroup.id);
    getGoals(currentGroup.id);
    setGroupId(currentGroup.id);
    getGroup(currentGroup.id);
    sendTo(value);
  };

  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{language.slice(17)}</p>
      </div>

      <ImgContainer
        onClick={() => handleClick(`/${title}/${subscribe}/activities`)}
      />
    </Container>
  );
}
