import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { newBoard } from './actions/board';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let setBoard = () => {
  let aux = [];

  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      let square = {
        id: `${i},${j}`,
        code: 0
      }
      aux.push(square);
    }
  }
  return aux;
}

let board = setBoard();

store.dispatch(newBoard(board))


ReactDOM.render(jsx, document.getElementById('app'));






