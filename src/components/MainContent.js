import React from 'react'
import styled from '@emotion/styled'
import ItemCard from './ItemCard'
import { useSelector } from 'react-redux'
import { getInventory } from '../redux/selectors'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 80%;
	margin: auto;
	justify-content: center;
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
			<ProductList />
		</Container>
	)
}

export default MainContent
