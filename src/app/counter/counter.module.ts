import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { counterReducer } from './store/counter.reducer';
import { CounterComponent } from './counter.component';



@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StoreModule.forFeature('count', counterReducer)
  ],
  exports: [
    CounterComponent
  ],
  providers: [  ]
})
export class CounterModule { }
