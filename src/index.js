import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {store} from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

store.subscribe(() => {
  console.log(JSON.stringify(store.getState(), null, ' '));
  localStorage.setItem('todos', JSON.stringify(store.getState()))
}
)

ReactDOM.render(  
<Provider store={store}>
    <App />
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();