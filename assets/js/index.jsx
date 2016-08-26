import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
import Layout from './Layout.jsx';
import '../styles/sass/main.scss';

import App from './app/App.jsx';
import MainPage from './app/MainPage.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage}/>
    </Route>
  </Router>
  ), document.querySelector("#myApp"));
