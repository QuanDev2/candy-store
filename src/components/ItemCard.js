import React, { useState } from 'react'
import styled from '@emotion/styled'
import { BOX_SHADOW_CARD } from '../utils/constants'

const data = {
  id: 1,
  name: 'Swedish Fish',
  price: 0.01,
  inStock: 2500,
  photoUrl:
    'https://upload.wikimedia.org/wikipedia/commons/4/40/Swedish_fish.png'
}

const Container = styled.div`
  max-width: 400px;
  flex-grow: 1;
  border-radius: 8px;
  box-shadow: ${BOX_SHADOW_CARD};
  padding: 1rem;
  margin: 1rem;
`

const Image = styled.img`
  width: 320px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 1rem;
`

const UpperSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LowerSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

const Name = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`

const Price = styled.span`
  font-size: 1.3rem;
`

const InStock = styled.span``

const AddCartForm = styled.form`
  display: inline;
`

const QtyLabel = styled.span`
  margin-right: 6px;
  font-size: 0.85rem;
`

const CartQty = styled.input`
  width: 60px;
  padding: 3px;
  height: 33px;
  margin-right: 0.3rem;
`

const AddCartBtn = styled.button`
  padding: 0.4rem 0.8rem;
  &:hover {
    filter: brightness(85%);
  }
`

function ItemCard({ name, price, inStock, photoUrl }) {
  const [qty, setQty] = useState(0)

  function onQtyChange(e) {
    setQty(e.target.value)
  }

  function onSubmit() {}

  return (
    <Container>
      <Image src={photoUrl} />
      <UpperSubContainer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </UpperSubContainer>
      <LowerSubContainer>
        <InStock>In stock: {inStock}</InStock>
        <AddCartForm onSubmit={onSubmit}>
          <QtyLabel>Qty</QtyLabel>
          <CartQty
            type="number"
            min="0"
            value={qty}
            onChange={onQtyChange}
          ></CartQty>
          <AddCartBtn>Add to Cart</AddCartBtn>
        </AddCartForm>
      </LowerSubContainer>
    </Container>
  )
}

export default ItemCard
