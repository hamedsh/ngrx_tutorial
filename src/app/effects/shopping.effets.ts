import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AddItemAction, AddItemActionFailure,
  AddItemActionSuccess,
  LoadItems,
  LoadItemsFailure,
  LoadItemsSuccess,
  ShoppingActionTypes
} from '../actions/shopping.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {ShoppingService} from '../shopping.service';
import {of} from 'rxjs';

@Injectable()
export class ShoppingEffects {
  constructor(private action$: Actions, private shoppingService: ShoppingService) {
  }
  @Effect()
  loadItems = this.action$.pipe(
    ofType<LoadItems>(ShoppingActionTypes.LOAD_ITEMS),
    mergeMap(
      () => this.shoppingService.getShoppingItems().pipe(
        map(data => new LoadItemsSuccess(data)),
        catchError(error => of(new LoadItemsFailure(error)))
      )
    )
  );

  @Effect()
  AddItem = this.action$.pipe(
    ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap(
      (data) => this.shoppingService.addShoppingItem(data.payload).pipe(
        map(() => new AddItemActionSuccess(data.payload)),
        catchError(error => of(new AddItemActionFailure(error)))
      )
    )
  );
}
