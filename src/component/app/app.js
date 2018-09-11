import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../dashboard/dashboard.js';
import createStore from '../../../lib/store.js';

export default class App extends Component {

  render() {
    return (
      <Provider store={createStore}>
        <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
        </BrowserRouter>
      </Provider>
    );
  }
}