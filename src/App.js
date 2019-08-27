import Router from './router';
import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import store from './services/reducers';
const App = () => {
  return (
    <Fragment>
      <Provider store={store} >
        <Router/>
      </Provider>
    </Fragment>
  );
};

export default App;
