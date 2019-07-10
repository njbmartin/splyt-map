import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { init as sentryInit } from '@sentry/browser';

import store from './store';
import MapScreen from './screens/map';
import NotFound from './screens/not-found';
import HomeComponent from './screens';

if (process.env.SENTRY_DSN) {
  sentryInit({
    dsn: process.env.SENTRY_DSN,
    release: process.env.VERSION,
    environment: process.env.ENVIRONMENT || 'development',
  });
}

const Root = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/map" component={MapScreen} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

ReactDOM.render(<Root />, document.getElementById('root'));
