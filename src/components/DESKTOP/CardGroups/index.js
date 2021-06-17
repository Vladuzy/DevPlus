import React from 'react'
import { ContainerButton, ContainerCard, ContainerImg, ContentText } from './styles'

export default function CardGroups() {
    return (
        <ContainerCard>
            <ContentText>
                <h3>Nome do grupo</h3>
                <p>descriçao do grupo</p>
                <div>
                    <p>linguagem</p>
                    <p>atividades: <span>5</span></p>
                    <p>metas: <span>5</span></p>
                </div>
            </ContentText>
            <ContainerButton>
                <ContainerImg/>
            </ContainerButton>
        </ContainerCard>
    )
}
