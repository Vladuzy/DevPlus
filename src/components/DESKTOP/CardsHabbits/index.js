import React from 'react'
import { ContainerCard } from './styles'
import Button from '../Button'
import ButtonFinnished from '../ButtonFinished'

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
            {isFinnished ? (<ButtonFinnished/>) : ( <> <Button/> <Button/> </>)}
            
        </ContainerCard>
    )
}
