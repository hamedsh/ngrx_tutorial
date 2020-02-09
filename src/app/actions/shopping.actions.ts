import {Action} from '@ngrx/store';
import {ShoppingItem} from '../store/shopping.item';

export enum ShoppingActionTypes {
  LOAD_ITEMS = '[SHOPPING] Load Items',
  LOAD_ITEMS_S = '[SHOPPING] Load Items S',
  LOAD_ITEMS_F = '[SHOPPING] Load Items F',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_S = '[SHOPPING] Add Item S',
  ADD_ITEM_F = '[SHOPPING] Add Item F',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_S = '[SHOPPING] Delete Item S',
  DELETE_ITEM_F = '[SHOPPING] Delete Item F',
}

export class LoadItems implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEMS;
}
export class LoadItemsSuccess implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEMS_S;
  constructor(public payload: ShoppingItem[]) {
  }
}
export class LoadItemsFailure implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEMS_F;
  constructor(public payload: string) {
  }
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) {
  }
}
export class AddItemActionSuccess implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_S;
  constructor(public payload: ShoppingItem) {
  }
}
export class AddItemActionFailure implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_F;
  constructor(public payload: string) {
  }
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  constructor(public payload: string) {
  }
}
export class DeleteItemActionSuccess implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_S;
  constructor(public payload: string) {
  }
}
export class DeleteItemActionFailed implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_F;
  constructor(public payload: string) {
  }
}

export type shoppingAction =
  | LoadItems
  | LoadItemsSuccess
  | LoadItemsFailure
  | AddItemAction
  | AddItemActionSuccess
  | DeleteItemAction
  | DeleteItemActionSuccess
  | DeleteItemActionFailed
  ;
