import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import StartScreen from '../components/StartScreen';
import NotFoundPage from '../components/NotFoundPage';
import EndScreen from '../components/EndScreen';
import GameScreen from '../components/GameScreen';
import Header from '../components/Header';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={StartScreen} exact={true} />
        <Route path="/startgame" component={GameScreen} />
        <Route path="/end" component={EndScreen} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
