import React from 'react'
import { useEffect } from 'react';
import { Container, ImgContainer } from './styles'
import { useHistory } from "react-router-dom";
import { useGroups } from "../../providers/Groups"
import {useActivity} from "../../providers/Activities"
import {useGoals} from "../../providers/Goals"
export default function GroupsCard({ currentGroup, title, description, language}) {

    const {group, setGroup} = useGroups();

    const {getGroupActivities} = useActivity()

    const {getGoals} = useGoals()

    const history = useHistory();

    const sendTo = (path) => {
      history.push(path);
    };
  
    const handleClick = (value) => {
      getGroupActivities(currentGroup.id)
      getGoals(currentGroup.id)
      setGroup(currentGroup)
      sendTo(value);
    };

    return (
        <Container>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{language}</p>
            </div>
            <ImgContainer onClick = { () => handleClick( `/${title}/activities`)} />
        </Container>
    )
}
