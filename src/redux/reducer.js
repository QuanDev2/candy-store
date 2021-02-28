import { combineReducers } from 'redux'
import { FETCH_INVENTORY, RECEIVE_PRODUCTS } from './actions'

function inventoryReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return [action.inventory, ...state]

    default:
      return state
  }
}

const rootReducer = combineReducers({
  inventory: inventoryReducer
})

export default rootReducer
