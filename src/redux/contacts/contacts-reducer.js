import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import action from "./contacts-actions";

const items = createReducer([], {
  [action.getContactsSuccess]: (_, { payload }) => payload,
  [action.addContactsSuccess]: (state, { payload }) => [payload, ...state],
  [action.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.filterContacts]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
