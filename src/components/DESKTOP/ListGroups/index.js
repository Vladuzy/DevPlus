import React from 'react'
import { useGroups } from '../../../providers/Groups'
import CardGroups from '../CardGroups';

export default function ListGroups({ values, search, url }) {
    const { groups, groupsSubs } = useGroups();
    
    return (
        <>
            {values === 'All' && search === '' ? groups.map((element, index) => {
                return <CardGroups key={index} 
                currentGroup = {element}
                name={element.name}
                description={element.description}
                category={element.category}
                activity={element.activities.length}
                goals={element.goals.length} 
                url={url}
                type={values}
                />
            })
            :
            null
            }
            {values === 'Mine' && search === '' ? groupsSubs.map((element, index) => {
                return <CardGroups key={index} 
                currentGroup = {element}
                name={element.name}
                description={element.description}
                category={element.category}
                activity={element.activities.length}
                goals={element.goals.length} 
                url={url}
                type={values}
                />
            })
            :
            null
            }

            {values === 'All' && search !== '' ? groups.filter((element, index) => {
                return element.name.toUpperCase().includes(search.toUpperCase()) === true
            }).map((element,index) => {
                return <CardGroups key={index} 
                currentGroup = {element}
                name={element.name}
                description={element.description}
                category={element.category}
                activity={element.activities.length}
                goals={element.goals.length} 
                url={url}
                type={values}
                />
            })
            :
            null
            }
            {values === 'Mine' && search !== '' ? groupsSubs.filter((element, index) => {
                return element.name.toUpperCase().includes(search.toUpperCase()) === true
            }).map((element,index) => {
                return <CardGroups key={index} 
                currentGroup = {element}
                name={element.name}
                description={element.description}
                category={element.category}
                activity={element.activities.length}
                goals={element.goals.length} 
                url={url}
                type={values}
                />
            })
            :
            null
            }
        </>
    )
}
