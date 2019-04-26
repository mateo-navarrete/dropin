import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ErrorBoundary from './ErrorBoundary';
import App from './js/App';
// import { store } from './js/store';

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <ErrorBoundary>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </ErrorBoundary>,
//   document.getElementById('root')
// );

// import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
