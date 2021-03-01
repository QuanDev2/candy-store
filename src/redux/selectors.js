// This function is for fetching current inventory
export function getInventory(state) {
	// console.log('Fetching inventory by selector', state.inventory)
	return state.inventory
}

// get group item counts
export function getDistinctProductCount(state) {
	return state.cart.length
}

// get all items in cart
export function getCartItems(state) {
	return state.cart
}

export function getCartTotal(state) {
	let total = 0
	state.cart.forEach(item => {
		total += item.qty * item.price
	})
	return total.toFixed(2)
}
