/* eslint-disable indent */
import { combineReducers } from 'redux'
import {
	RECEIVE_PRODUCTS,
	SUBTRACT_PRODUCT,
	ADD_TO_CART,
	DELETE_CART_ITEM
} from './actions'

function inventoryReducer(state = [], action) {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			return action.inventory
		// case SUBTRACT_PRODUCT:
		//   return state.map(item =>
		//     item.id === action.id
		//       ? {
		//           ...item,
		//           inStock: item.inStock - action.qty
		//         }
		//       : item
		//   )
		case SUBTRACT_PRODUCT:
			return state.map(item =>
				item.id === action.payload.id
					? {
							...item,
							inStock: item.inStock - action.payload.qty
					  }
					: item
			)
		default:
			return state
	}
}

function cartReducer(state = [], action) {
	switch (action.type) {
		case ADD_TO_CART:
			// traverse state to see if item already exists
			if (state.find(item => item.id === action.payload.id)) {
				return state.map(item =>
					item.id === action.payload.id
						? { ...item, qty: item.qty + action.payload.qty }
						: item
				)
			} else {
				return [...state, action.payload]
			}

		default:
			return state
	}
}

const rootReducer = combineReducers({
	inventory: inventoryReducer,
	cart: cartReducer
})

export default rootReducer
