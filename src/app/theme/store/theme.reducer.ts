import { createReducer, on } from '@ngrx/store';
import { toggleMode } from './theme.actions';

const localStorageKey = 'darkModeIsEnabled';

export const initialState = localStorage.getItem(localStorageKey) === "true"

console.log("got initial state", initialState)

const reducer = createReducer(initialState,
  on(toggleMode, state => {
    const newState = !state;
    console.log("got new state,", newState)
    localStorage.setItem(localStorageKey, String(newState));
    console.log(localStorage.getItem(localStorageKey))
    return newState;
  })
);

export const themeReducer = (state, action) => reducer(state, action);
