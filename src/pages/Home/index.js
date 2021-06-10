import React from 'react'
import { Container, HeaderStyles, ContactContainer, MainStyles } from './styles'
import { FiAlignJustify } from 'react-icons/fi'
import Buttons from '../../components/Button'

export default function Home() {
    return (
        <Container>
            <HeaderStyles>
                <h4>Habbits lifes</h4>
                <input id='check' type='checkbox'/>
                <ContactContainer>
                    <p>Contato</p>
                    <p>comunidade</p>
                    <p>Recursos</p>
                </ContactContainer>
                <label for='check'><FiAlignJustify/></label>
            </HeaderStyles>
            <MainStyles>
                <h1>Habbits app</h1>
                <h2>Venha fazer parte da nossa familia!</h2>
                <p> o melhor jeito de você organizar os seus habitos e com uma otima comunidade!</p>
                <Buttons>Fazer Cadastro</Buttons>
                <Buttons>Fazer Login</Buttons>                                                            
            </MainStyles>
        </Container>
    )
}
