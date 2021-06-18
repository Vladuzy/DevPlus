import React from 'react'
import { ContainerButton, ContainerCard, ContainerImg, ContentText } from './styles'
import { useHistory } from "react-router-dom";
import { useActivity } from "../../../providers/Activities";
import { useGoals } from "../../../providers/Goals";
import { useAuth } from "../../../providers/AuthProvider";
import { useGroups } from "../../../providers/Groups";

export default function CardGroups({ currentGroup, name, description, category, activity, goals, url, type }) {
    
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
        <ContainerCard>
            <ContentText>
                <h3>{name}</h3>
                <p>{description}</p>
                <div>
                    <p>{category.slice(17)}</p>
                    <p>atividades: <span>{activity}</span></p>
                    <p>metas: <span>{goals}</span></p>
                </div>
            </ContentText>
            <ContainerButton onClick={() => handleClick(`${url}/${name}/${subscribe}`)} type={type}>
                <ContainerImg/>
            </ContainerButton>
        </ContainerCard>
    )
}
