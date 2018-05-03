import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { newHumanBoard } from './actions/board';
import { newCpuBoard } from './actions/cpuBoard';
import setBoard from './selector/generateBoard';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(newHumanBoard(setBoard()));

store.dispatch(newCpuBoard(setBoard()));

ReactDOM.render(jsx, document.getElementById('app'))









