import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { getDistinctProductCount } from '../redux/selectors'
import { Link } from 'react-router-dom'

const Title = styled(Link)`
	font-size: 2rem;
	margin: 0.7rem 3rem;
	display: inline;
	color: white;
`
const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 2rem;
	background-color: var(--dark-green);
	color: white;
`

const CartLink = styled(Link)`
	font-size: 2rem;
	padding: 5px 16px;
	border-radius: 10px;
	/* border: 1px solid var(--gray); */
	border: none;
	cursor: pointer;
	outline: none;
	color: white;
	margin-right: 2rem;
`
const Count = styled.span`
	margin-left: 9px;
	position: relative;
	bottom: 12px;
	font-size: 1.2rem;
	font-weight: 500;
`

const CartText = styled.span`
	font-size: 1.5rem;
	margin-right: 1rem;
`

function Navbar() {
	const count = useSelector(getDistinctProductCount)

	return (
		<Container>
			<Title to="/">Quan&apos;s Candy Shop</Title>
			<CartLink to="/cart">
				<CartText>
					Shopping Cart

				</CartText>
				<FontAwesomeIcon icon={faShoppingCart} />
				{count > 0 && <Count>{count}</Count>}
				<Count />
			</CartLink>
		</Container>
	)
}

export default Navbar
