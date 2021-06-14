import React from 'react'
import { Container, ImgContainer, InputStyled } from './styles'

export default function InputSearch({ ...rest  }) {
    return (
        <Container>
            <InputStyled {...rest} />
            <ImgContainer/>
        </Container>
    )
}
