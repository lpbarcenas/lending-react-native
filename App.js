/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Root, configureStore} from './src/navigators/AppNavigator';
import { NETWORK_INTERFACE } from './src/config';

StatusBar.setBarStyle('light-content', true);

class App extends Component {
  render() {
  	return (
      <Provider store={configureStore({})}>
          <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;