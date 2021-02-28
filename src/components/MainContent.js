import React from 'react'
import styled from '@emotion/styled'
import ItemCard from './ItemCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInventory } from '../redux/selectors'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  margin: auto;
  justify-content: center;
`

function MainContent() {
  const inventory = useSelector(fetchInventory)
  const ProductList = () => {
    return inventory.map(item => (
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
