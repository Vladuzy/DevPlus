import React from 'react'
import { ButtonExit } from '../../Buttons/ButtonExitGroup/style'
import { ContainerCard } from './styles'

export default function CardsHabbits({ isFinnished = false }) {
    return (
        <ContainerCard colorDificulty={'red'}>
            <p>Nome do habito</p>
            <div>
            <p>dificuldade</p>
            <span>Linguagem</span>
            </div>
            <div>
                <p>progresso: <span>50%</span></p>
                <span>frequencia</span>
            </div>
            
        </ContainerCard>
    )
}
