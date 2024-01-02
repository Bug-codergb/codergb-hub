import React, { Suspense } from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { HashRouter, useRoutes } from "react-router-dom";
import { routes } from "./router";
import store from "./store";
import "./store/actionCreators";
import HeaderTop from "./components/header/index";
import { Layout } from "antd";
import ErrorBoundary from "./components/error";
import { CommonWrapper } from "./assets/css/common";

const { Header } = Layout;

function App() {
  console.log(1);
  function RouteElement() {
    return useRoutes(routes);
  }

  return (
    <CommonWrapper>
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <Suspense fallback={<div>wwww</div>}>
              <ErrorBoundary>
                <RouteElement />
              </ErrorBoundary>
            </Suspense>
          </HashRouter>
        </Provider>
      </div>
    </CommonWrapper>
  );
}

export default App;
