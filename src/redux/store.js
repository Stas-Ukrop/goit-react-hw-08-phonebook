import contactsReducer from "./contacts/contacts-reducer";
import authUserReducer from "./auth/auth-reducer";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import logger from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const persistConfig = {
  key: "token",
  whitelist: ["token"],
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistReducer(persistConfig, authUserReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
