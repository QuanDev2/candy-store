export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export function receiveProducts(inventory) {
  return { type: RECEIVE_PRODUCTS, inventory }
}
