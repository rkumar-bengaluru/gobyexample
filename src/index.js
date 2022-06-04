import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppLayout2 from './components/layout2';
import App from './components/app';
import GoLogger from './components/logger';
import RestInGo from './components/rest'

ReactDOM.render(
  
  <BrowserRouter>
    <AppLayout2>
      <Switch>
        <Route exact path="/gobyexample/" component={App} />
        <Route exact path="/gobyexample/logger" component={GoLogger} />
        <Route exact path="/gobyexample/logger" component={RestInGo} />
      </Switch>
    </AppLayout2>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();


