import React from 'react'
import styled from '@emotion/styled'
import { BOX_SHADOW_CARD } from '../utils/constants'
import { useSelector } from 'react-redux'
import { getCartItems, getCartTotal } from '../redux/selectors'

const Container = styled.div`
	width: 40%;
	margin: auto;
	box-shadow: ${BOX_SHADOW_CARD};
	border-radius: 4px;
	padding: 1rem;
	margin-top: 3rem;
`

const ListContainer = styled.ul``

const ListItem = styled.li`
	&::after {
		content: '';
		display: block;
		height: 1px;
		background-color: var(--gray);
	}
`
const ListItemContent = styled.div`
	display: flex;
	padding: 1rem;
	color: var(--dark-green);
`
const TitleContainer = styled.div`
	&::after {
		content: '';
		margin: 1rem 0;
		display: block;
		height: 1px;
		background-color: var(--gray);
	}
`

const TitleFlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`

const Title = styled.h2`
	font-weight: 500;
`

const ItemTotalLabel = styled.span`
	font-weight: 500;
	margin-right: 2rem;
	font-size: 1.2rem;
`

const DeleteBtn = styled.button`
	display: block;
	margin-top: 10px;
	color: var(--red);
	background-color: transparent;
	border: none;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`

const ItemPhoto = styled.img`
	width: 150px;
	height: 100px;
	object-fit: contain;
	margin-right: 2rem;
`

const ItemName = styled.h4`
	margin-top: 8px;
	margin-bottom: 10px;
`
const LineTotal = styled.div`
	margin-left: auto;
	margin-right: 2rem;
	color: var(--black);
	font-size: 1.4rem;
	font-weight: 500;
`

const TotalContainer = styled.div`
	display: flex;
	font-size: 1.5rem;
	font-weight: 500;
	margin-top: 1rem;
	justify-content: space-between;
	padding-left: 1.8rem;
	padding-right: 2.7rem;
`

const CheckoutBtn = styled.button`
	padding: 0.7rem 2rem;
	width: 92%;
	margin: 1rem auto;
	display: block;
	border: none;
	outline: none;
	border-radius: 4px;
	background-color: var(--green);
	color: white;
	font-size: 1.2rem;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`

function CartDetails() {
	const cartItems = useSelector(getCartItems)
	const cartTotal = useSelector(getCartTotal)

	const ItemList = ({ itemList }) =>
		itemList.map(item => (
			<ListItem key={item.id}>
				<ListItemContent>
					<ItemPhoto src={item.photoUrl} />
					<div className="item-info">
						<ItemName>{item.name}</ItemName>
						<div>
							<span>
								<span style={{ color: '#333' }}>Qty:</span> {item.qty}
							</span>
							<span style={{ marginLeft: '8px' }}> @ ${item.price} each</span>
						</div>
						<DeleteBtn>Delete</DeleteBtn>
					</div>
					<LineTotal>${item.qty * item.price}</LineTotal>
				</ListItemContent>
			</ListItem>
		))

	return (
		<Container>
			<TitleContainer>
				<TitleFlexContainer>
					<Title>Shopping Cart</Title>
					<ItemTotalLabel>Item Total</ItemTotalLabel>
				</TitleFlexContainer>
			</TitleContainer>
			{cartItems.length > 0 ? (
				<>
					<ListContainer>
						<ItemList itemList={cartItems} />
					</ListContainer>
					<TotalContainer>
						<span>Total:</span>
						<span>${cartTotal}</span>
					</TotalContainer>
					<CheckoutBtn>Proceed to Checkout</CheckoutBtn>
				</>
			) : (
				<h3 style={{ fontSize: '1.3rem', fontWeight: '400' }}>
					Your cart is empty
				</h3>
			)}
		</Container>
	)
}

export default CartDetails
