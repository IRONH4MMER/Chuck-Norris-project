import './App.css';
import {Provider} from "react-redux";
import store from "./Store/store";
import React from "react";
import Page from "./Components/Page";

function App() {

  return (
      <Provider store={store}>
          <Page />
      </Provider>
  );
}

export default App;
