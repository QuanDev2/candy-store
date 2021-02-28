import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, SUBTRACT_PRODUCT, ADD_TO_CART } from './actions'

function inventoryReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.inventory
    case SUBTRACT_PRODUCT:
      return state.map(item =>
        item.id === action.id
          ? {
              ...item,
              inStock: item.inStock - action.qty
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
      return [...state, action.payload]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer
})

export default rootReducer
