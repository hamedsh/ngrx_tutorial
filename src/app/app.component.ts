import {Component, OnInit} from '@angular/core';
import {AppState} from './store/models/app-state.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ShoppingItem} from './store/shopping.item';
import {AddItemAction, DeleteItemAction, LoadItems} from './actions/shopping.actions';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrxShopping1';
  shoppingItems$: Observable<ShoppingItem[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  newItemName: string;
  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading );
    this.error$ = this.store.select(store => store.shopping.error );

    this.store.dispatch(new LoadItems());
  }

  addItem() {
    const id = uuid.v4();
    this.store.dispatch(new AddItemAction({id, name: this.newItemName}));
    this.newItemName = '';
  }
  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
