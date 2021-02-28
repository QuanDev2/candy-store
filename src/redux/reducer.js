import { combineReducers } from 'redux'
import { FETCH_INVENTORY, RECEIVE_PRODUCTS } from './actions'

function inventoryReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      console.log('receiving products')
      return action.inventory

    default:
      return state
  }
}

const rootReducer = combineReducers({
  inventory: inventoryReducer
})

export default rootReducer
