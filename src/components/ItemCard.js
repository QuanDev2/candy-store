import React, { useState } from 'react'
import styled from '@emotion/styled'
import { BOX_SHADOW_CARD } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { subtractProduct, addToCart } from '../redux/actions'
import PropTypes from 'prop-types'

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
	border: 1px solid var(--gray);
	box-shadow: ${BOX_SHADOW_CARD};
	border-radius: 8px;
	height: 33px;
	display: inline-flex;
	align-items: center;
	padding: 0 6px;
	margin-right: 5px;
	background-color: var(--light-gray);
`

const QtyLabel = styled.span`
	margin-right: 6px;
	font-size: 0.85rem;
`

const QtyInput = styled.input`
	width: 60px;
	border: none;
	outline: none;
	background-color: #eee;
	padding: 4px;
	border-radius: 6px;
`

const AddCartBtn = styled.button`
	border-radius: 4px;
	border: none;
	padding: 0.55rem 0.8rem;
	background-color: var(--green);
	color: white;
	cursor: pointer;
	outline: none;
	&:hover {
		filter: brightness(110%);
	}
	&:disabled {
		background-color: var(--disabled-gray);
		&:hover {
			filter: brightness(100%);
		}
	}
`

function ItemCard({ name, price, inStock, photoUrl, id }) {
	const [qty, setQty] = useState(0)
	const dispatch = useDispatch()

	function onQtyChange(e) {
		setQty(e.target.value)
	}

	function onSubmit(e) {
		e.preventDefault()
		const qty = parseInt(e.target[0].value)
		// const productId = parseInt(e.target.parentNode.parentNode.dataset.id)
		if (qty === 0) {
			alert('Quantity cannot be 0')
			return
		}
		// check if quantity > in stock
		if (qty > inStock) {
			alert('Not enough item in stock')
			return
		}

		dispatch(subtractProduct({ id: id, qty: qty }))
		dispatch(
			addToCart({
				id: id,
				qty: qty,
				price: price,
				photoUrl: photoUrl,
				name: name
			})
		)
	}

	return (
		<Container data-id={id}>
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
					<AddCartBtn disabled={inStock === 0}>Add to Cart</AddCartBtn>
				</AddCartForm>
			</LowerSubContainer>
		</Container>
	)
}

ItemCard.propTypes = {
	// name, price, inStock, photoUrl, id
	name: PropTypes.string,
	price: PropTypes.number,
	inStock: PropTypes.number,
	photoUrl: PropTypes.string,
	id: PropTypes.number
}

export default ItemCard
