import React, { Component, Fragment } from "react";

import ImageGrid from "./components/ImageGrid/ImageGrid";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";

import configureStore from "./components/store/index";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <ImageGrid />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
