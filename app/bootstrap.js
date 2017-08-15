import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import { bootstrapRedux } from './reducers';
import RouterContainer from './containers/RouterContainer';

/**
 * Bootstraps dependencies and registers the root application component with ReactNative.
 *
 * @return {void}
 */
function bootstrap() {
  const store = bootstrapRedux();

  class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <RouterContainer />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('Applicants', () => App);
}

export { bootstrap as default };
