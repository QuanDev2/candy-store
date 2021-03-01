export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const SUBTRACT_PRODUCT = 'SUBTRACT_PRODUCT'
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM'

export function receiveProducts(inventory) {
	return { type: RECEIVE_PRODUCTS, inventory }
}

export function subtractProduct(payload) {
	return { type: SUBTRACT_PRODUCT, payload }
}

export function addToCart(payload) {
	return { type: ADD_TO_CART, payload }
}

export function deleteCartItem(payload) {
	return { type: DELETE_CART_ITEM, payload }
}
