import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { ApplicantsContainer } from './applicant';

class RouterContainer extends Component {
  render() {
    return (
      <Router title="Applicants Wizard">
        <Scene key="root">
          <Scene key="applicants" component={ApplicantsContainer} />
        </Scene>
      </Router>
    );
  }
}

export { RouterContainer as default };
