import React, { useContext } from 'react'
import { GroupsContext } from '../../providers/Groups'
import GroupsCard from '../GroupsCard';

export default function GroupList({ allGroups = false }) {
    const { groups, groupsSubs } = useContext(GroupsContext);
    return (
        <>
            { allGroups ? 
            groups.map( (element, index) => 
            <GroupsCard 
            key={index} 
            currentGroup = {element}
            title={element.name}
            description={element.description}
            language={element.category}
            />)
            : 
            groupsSubs.map( (element, index) => 
            <GroupsCard 
            key={index} 
            currentGroup = {element}
            title={element.name}
            description={element.description}
            language={element.category}
            />)
            }
        </>
    )
}
