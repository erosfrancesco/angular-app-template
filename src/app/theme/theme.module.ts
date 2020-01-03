import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { themeReducer } from './store/theme.reducer';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { ThemeService } from './theme.service';

import { MatSlideToggleModule } from '@angular/material';



@NgModule({
  declarations: [ThemeSwitchComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    StoreModule.forRoot({ darkMode: themeReducer })
  ],
  exports: [
    ThemeSwitchComponent
  ],
  providers: [ThemeService]
})
export class ThemeModule { }
