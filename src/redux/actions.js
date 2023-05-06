import { DELETE_CONTACT, INCREMENT, SET_FILTER } from './types';

export const increment = contact => ({ type: INCREMENT, payload: contact });
export const setFilter = value => ({
  type: SET_FILTER,
  payload: value,
});
export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });
