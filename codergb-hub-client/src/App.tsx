import React, {Suspense} from 'react';
import {Provider} from "react-redux";
import 'antd/dist/antd.css';
import {BrowserRouter, useRoutes} from "react-router-dom";
import {routes} from "./router";
import store from "./store"
import "./store/actionCreators";
import HeaderTop from "./components/header/index";
import {Layout} from "antd";
import ErrorBoundary from "./components/error";
import {CommonWrapper} from "./assets/css/common";

const {Header} = Layout;

function App() {
  function RouteElement() {
    return useRoutes(routes);
  }

  return (
      <CommonWrapper>
        <div className="App">

            <Provider store={store}>
              <BrowserRouter>
                <Suspense fallback={
                  <div>wwww</div>
                }>
                  <ErrorBoundary>
                    <RouteElement/>
                  </ErrorBoundary>
                </Suspense>
              </BrowserRouter>
            </Provider>

        </div>
      </CommonWrapper>
  );
}

export default App;
