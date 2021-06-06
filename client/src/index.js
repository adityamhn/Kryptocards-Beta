import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './app/store';
import * as serviceWorker from './serviceWorker';
import { MdFiberPin } from 'react-icons/md';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';



ReactGA.initialize('UA-198832656-1'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(
      <Provider store={store}>
<App />
      </Provider>
      
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
