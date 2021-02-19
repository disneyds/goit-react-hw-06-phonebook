import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebookActions';

const contactsReducer = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => [payload, ...state],
  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
