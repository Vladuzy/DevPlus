import React from 'react'
import { Container, ImgContainer } from './styles'


export default function GroupsCard({ title, description, language}) {
    return (
        <Container>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{language}</p>
            </div>
            <ImgContainer/>
        </Container>
    )
}
