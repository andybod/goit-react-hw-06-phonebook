import { createStore } from 'redux';
import { reduser } from './reduser';
import { initialState } from './initialState';

export const store = createStore(reduser, initialState);
