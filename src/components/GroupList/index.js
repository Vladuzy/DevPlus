import React, { useContext } from 'react'
import { GroupsContext } from '../../providers/Groups'
import GroupsCard from '../GroupsCard';

export default function GroupList({ allGroups, search }) {
    const { groups, groupsSubs } = useContext(GroupsContext);
    return (
        <>
            { search === '' && allGroups ?
            groups.map( (element, index) => 
            <GroupsCard 
            key={index} 
            currentGroup = {element}
            title={element.name}
            description={element.description}
            language={element.category}
            />)
            : null
            }
            {
                allGroups !== true && search === '' ?
                            groupsSubs.map( (element, index) => 
                            <GroupsCard 
                            key={index} 
                            currentGroup = {element}
                            title={element.name}
                            description={element.description}
                            language={element.category}
                            />)
                : 
                null
            }
            {
                search !== '' && allGroups ?
                groups.filter( (element) => 
                element.name.includes(search) === true)
                .map((element, index) => {
                    return <GroupsCard 
                    key={index} 
                    currentGroup = {element}
                    title={element.name}
                    description={element.description}
                    language={element.category}
                    />
                })
                :
                null
            }
            {
                search !== '' && allGroups !== true ? groupsSubs.filter( (element) => 
                element.name.includes(search) === true)
                .map((element, index) => {
                    return <GroupsCard 
                    key={index} 
                    currentGroup = {element}
                    title={element.name}
                    description={element.description}
                    language={element.category}
                    />
                })
                : 
                null
            }
        </>
    )
}
