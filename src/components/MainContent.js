import React from 'react'
import styled from '@emotion/styled'
import ItemCard from './ItemCard'
import { useSelector } from 'react-redux'
import { getInventory } from '../redux/selectors'

const Container = styled.div`
	max-width: 80%;
	margin: 2rem auto;
`

const Title = styled.h1`
	font-weight: 500;
	color: var(--black);
`

const ProductListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 2rem;
`

function MainContent() {
	const inventory = useSelector(getInventory)
	const ProductList = () =>
		inventory.map(item => (
			<ItemCard
				key={item.id}
				name={item.name}
				price={item.price}
				inStock={item.inStock}
				photoUrl={item.photoUrl}
				id={item.id}
			/>
		))

	return (
		<Container>
			<Title>Best Selling Candy</Title>
			<ProductListContainer>
				<ProductList />
			</ProductListContainer>
		</Container>
	)
}

export default MainContent
