import {ShoppingItem} from '../store/shopping.item';
import {shoppingAction, ShoppingActionTypes} from '../actions/shopping.actions';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ShoppingState extends EntityState<ShoppingItem> {
  loading: boolean;
  error: string;
}

export const itemAdapter: EntityAdapter<ShoppingItem> = createEntityAdapter<ShoppingItem>();

const initialState: ShoppingState = itemAdapter.getInitialState({
  ids: [],
  loading: false,
  error: ''
});

export function shoppingReducer(
  state = initialState,
  action: shoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_ITEMS:
      return {...state, loading: true};
    case ShoppingActionTypes.LOAD_ITEMS_S:
      // return {...state, list: action.payload, loading: false};
      return itemAdapter.addAll(action.payload, {...state, loading: false});
    case ShoppingActionTypes.LOAD_ITEMS_F:
      return {...state, error: action.payload, loading: false};
    // case ShoppingActionTypes.ADD_ITEM:
    //   return {...state, loading: true};
    // case ShoppingActionTypes.ADD_ITEM_S:
    //   return {...state, list: state.list.concat(action.payload), loading: false};
    case ShoppingActionTypes.DELETE_ITEM_S:
      return itemAdapter.removeOne(action.payload, {
        ...state,
        loading: false
      });
    case ShoppingActionTypes.DELETE_ITEM_F:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

const getItemsFeatureState = createFeatureSelector<ShoppingState>(
  'items'
) ;

export const getItems = createSelector(
  getItemsFeatureState,
  itemAdapter.getSelectors().selectAll
);
