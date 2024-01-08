import { Suspense, type ReactElement } from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { HashRouter, useRoutes } from 'react-router-dom';
import { routes } from './router';
import store from './store';
import './store/actionCreators';
import ErrorBoundary from './components/error';
import { CommonWrapper } from './assets/css/common';

function App(): ReactElement {
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
