import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate
        loading={<h1>Загружаю.......</h1>}
        persistor={store.persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
