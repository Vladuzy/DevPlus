import React from 'react'
import Goal from '../../../components/DESKTOP/Goals'
import Activity from '../../../components/DESKTOP/Activity'
import { ContainerCard } from './styles'
import Button from '../Button'

export default function CardGoalsActivity({ isOfGroup = false, Goals = false }) {
    return (
        <ContainerCard colorDificulty={'red'}>
            {Goals ? <Goal/> : <Activity/>}
            
            
        </ContainerCard>
    )
}