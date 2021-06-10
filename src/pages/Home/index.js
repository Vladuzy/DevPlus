import React from 'react'
import { Container, HeaderStyles, ContactContainer } from './styles'
import { FiAlignJustify } from 'react-icons/fi'

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
        </Container>
    )
}
