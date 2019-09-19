import Router from './router';
import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import store from './services/reducers';
import Code from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';
import AdSense from './components/AdSense';

class App extends React.Component {
  constructor(props) {
    super(props);

    OneSignal.init('7fe80b62-8290-4a4c-a7c9-a4f677e14046');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpen);
    OneSignal.addEventListener('ids', this.onIDS);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpen);
    OneSignal.removeEventListener('ids', this.onIDS);
  }
  onReceived = (data) => {
    
  }
  onOpen = (data) => {

  }
  onIDS = (data) => {

  }
  render() {
      return (
        <Fragment>
          <Provider store={store} >
            <Router/>
            <AdSense />
          </Provider>
        </Fragment>
    );
  }
};

export default Code({
  checkFrequency: Code.CheckFrequency.ON_APP_RESUME
})(App);
