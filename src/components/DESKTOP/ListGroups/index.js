import React from 'react'
import { useGroups } from '../../../providers/Groups'
import CardGroups from '../CardGroups';
import { useEffect } from 'react';
export default function ListGroups({ values, search }) {
    const { getGroups, groups, getGroupsSubs, groupsSubs } = useGroups();
    
    useEffect(() => {
        getGroups();
        getGroupsSubs();
    }, [])

    return (
        <>
            {values === 'All' && search === '' ? groups.map((element, index) => {
                return <CardGroups key={index} 
                name={element.name}
                description={element.description}
                category={element.category}
                activity={element.activities.length}
                goals={element.goals.length} 
                />
            })
            :
            null
            }
            {values === 'Mine' && search === '' ? groupsSubs.map((element, index) => {
                return <CardGroups key={index} 
                name={element.name}
                description={element.description}
                category={element.category}
                activity={element.activities.length}
                goals={element.goals.length} 
                />
            })
            :
            null
            }

            {values === 'All' && search !== '' ? groups.filter((element, index) => {
                return element.name.toUpperCase().includes(search.toUpperCase()) === true
            }).map((element,index) => {
                return <CardGroups key={index} 
                name={element.name}
                description={element.description}
                category={element.category}
                activity={element.activities.length}
                goals={element.goals.length} 
                />
            })
            :
            null
            }
            {values === 'Mine' && search !== '' ? groupsSubs.filter((element, index) => {
                return element.name.toUpperCase().includes(search.toUpperCase()) === true
            }).map((element,index) => {
                return <CardGroups key={index} 
                name={element.name}
                description={element.description}
                category={element.category}
                activity={element.activities.length}
                goals={element.goals.length} 
                />
            })
            :
            null
            }
        </>
    )
}
