export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const SUBTRACT_PRODUCT = 'SUBTRACT_PRODUCT'
export const ADD_TO_CART = 'ADD_TO_CART'

export function receiveProducts(inventory) {
  return { type: RECEIVE_PRODUCTS, inventory }
}

export function subtractProduct({ id, qty }) {
  return { type: SUBTRACT_PRODUCT, id: id, qty: qty }
}
