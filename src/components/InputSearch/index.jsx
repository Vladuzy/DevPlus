import React from 'react'
import { Container, ImgContainer, InputStyled } from './styles'

export default function InputSearch({ onChange, ...rest }) {
    return (
        <Container>
            <InputStyled {...rest} onChange={onChange} />
            <ImgContainer/>
        </Container>
    )
}
