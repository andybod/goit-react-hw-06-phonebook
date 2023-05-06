import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { DELETE_CONTACT, INCREMENT, SET_FILTER } from './types';

const contactsReduser = (state = initialState.phoneBook, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(i => i.id !== action.payload),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
export const reduser = combineReducers({ phoneBook: contactsReduser });
