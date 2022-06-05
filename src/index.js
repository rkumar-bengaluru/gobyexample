import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppLayout2 from './components/layout2';
import App2 from './components/app/v2';
import GoLogger from './components/logger';

ReactDOM.render(
  <BrowserRouter>
    <AppLayout2>
      <Switch>
        <Route exact path="/gobyexample/" component={App2} />
        <Route exact path="/gobyexample/logger" component={GoLogger} />
      </Switch>
    </AppLayout2>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();


