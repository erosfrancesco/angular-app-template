import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { toggleMode } from './store/theme.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode: Observable<boolean>;

  constructor(private store: Store<{ darkMode: boolean }>) {
    this.darkMode = store.pipe(select('darkMode'));
  }

  toggleMode() {
    this.store.dispatch(toggleMode());
  }
}

