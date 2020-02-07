import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { shoppingReducer } from './reducers/shopping.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import {ShoppingEffects} from './effects/shopping.effets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      shopping: shoppingReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ShoppingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
