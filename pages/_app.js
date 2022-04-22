import "../scss/main.scss";
import { Fragment } from "react";

import Header from "../components/layout/Header/Header";
import { Provider } from "react-redux";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <Header></Header>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
