import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div``

function Cart() {
	return (
		<Container>
			<FontAwesomeIcon icon={faShoppingCart} />
		</Container>
	)
}

export default Cart
