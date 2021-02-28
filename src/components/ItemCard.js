import React, { useState } from 'react'
import styled from '@emotion/styled'
import { BOX_SHADOW_CARD } from '../utils/constants'

const Container = styled.div`
  border-radius: 8px;
  box-shadow: ${BOX_SHADOW_CARD};
  padding: 1rem;
  margin: 1rem;
`

const Image = styled.img`
  width: 400px;
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

const QtyContainer = styled.div`
  border: 1px solid #333;
  border-radius: 4px;
  height: 33px;
  display: inline-flex;
  align-items: center;
  padding: 0 6px;
  margin-right: 5px;
`

const QtyLabel = styled.span`
  margin-right: 6px;
  font-size: 0.85rem;
`

const QtyInput = styled.input`
  width: 50px;
  /* margin-right: 0.3rem; */
  border: none;
  outline: none;
`

const AddCartBtn = styled.button`
  border-radius: 4px;
  border: none;
  padding: 0.55rem 0.8rem;
  &:hover {
    filter: brightness(110%);
  }
  background-color: var(--green);
  color: white;
  cursor: pointer;
`

function ItemCard({ name, price, inStock, photoUrl }) {
  const [qty, setQty] = useState(0)

  function onQtyChange(e) {
    setQty(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
  }

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
          <QtyContainer>
            <QtyLabel>Qty:</QtyLabel>
            <QtyInput
              type="number"
              min="0"
              value={qty}
              onChange={onQtyChange}
            ></QtyInput>
          </QtyContainer>
          <AddCartBtn>Add to Cart</AddCartBtn>
        </AddCartForm>
      </LowerSubContainer>
    </Container>
  )
}

export default ItemCard
