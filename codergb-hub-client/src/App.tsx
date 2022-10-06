import React,{Suspense} from 'react';
import {Provider} from "react-redux";
import 'antd/dist/antd.css';
import { BrowserRouter,useRoutes } from "react-router-dom";
import {routes} from "./router";
import store from "./store"
function App() {
  function RouteElement(){
    return useRoutes(routes);
  }
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={
            <div>wwww</div>
          }>
            <RouteElement/>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
