import React from 'react'
import { ContainerButton, ContainerCard, ContainerImg, ContentText } from './styles'

export default function CardGroups({ name, description, category, activity, goals }) {
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
            <ContainerButton>
                <ContainerImg/>
            </ContainerButton>
        </ContainerCard>
    )
}
