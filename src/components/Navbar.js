import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1`
  font-size: 2rem;
  margin: 0.7rem 3rem;
`
const Container = styled.nav``
function Navbar() {
  return (
    <Container>
      <Title>Quan's Candy Shop</Title>
    </Container>
  )
}

export default Navbar
