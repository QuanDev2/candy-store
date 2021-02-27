import React from 'react'
import useProducts from '../hooks/useProducts'
import styled from '@emotion/styled'
import ItemCard from './ItemCard'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  margin: auto;
`

function MainContent() {
  const { products, isLoading } = useProducts()
  const ProductList = () => {
    return products.map(item => (
      <ItemCard
        key={item.id}
        name={item.name}
        price={item.price}
        inStock={item.inStock}
        photoUrl={item.photoUrl}
      />
    ))
  }

  return (
    <Container>
      <ProductList />
    </Container>
  )
}

export default MainContent
