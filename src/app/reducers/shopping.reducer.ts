import {ShoppingItem} from '../store/shopping.item';
import {shoppingAction, ShoppingActionTypes} from '../actions/shopping.actions';

export interface ShoppingState {
  list: ShoppingItem[];
  loading: boolean;
  error: string;
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: ''
};

export function shoppingReducer(
  state: ShoppingState = initialState,
  action: shoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_ITEMS:
      return {...state, loading: true};
    case ShoppingActionTypes.LOAD_ITEMS_S:
      return {...state, list: action.payload, loading: false};
    case ShoppingActionTypes.LOAD_ITEMS_F:
      return {...state, error: action.payload};
    case ShoppingActionTypes.ADD_ITEM:
      return {...state, loading: true};
    case ShoppingActionTypes.ADD_ITEM_S:
      return {...state, list: state.list.concat(action.payload), loading: false};
    case ShoppingActionTypes.DELETE_ITEM:
      return {...state, list: state.list.filter(item => item.id !== action.payload), loading: false};
    default:
      return state;
  }
}
