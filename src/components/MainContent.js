import React from 'react'
import useProducts from '../hooks/useProducts'
import styled from '@emotion/styled'
import HashLoader from 'react-spinners/HashLoader'
import ItemCard from './ItemCard'
import { receiveProducts } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  margin: auto;
  justify-content: center;
`
const Spinner = styled.div`
  margin: 20rem auto;
`

function MainContent() {
  const { products, isLoading } = useProducts()
  const dispatch = useDispatch()
  dispatch(receiveProducts(products))
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
      {isLoading && (
        <Spinner>
          <HashLoader size={150} color="#36d2b3" />
        </Spinner>
      )}
      {!isLoading && <ProductList />}
    </Container>
  )
}

export default MainContent
