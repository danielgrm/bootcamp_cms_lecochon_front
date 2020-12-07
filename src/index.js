// //esse é o meu
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Router from './routes';
// import 'bootstrap/dist/css/bootstrap.min.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//esse é do liniker
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes';
import GlobalStyle from './css/globalStyle';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Router />
  </React.Fragment>,
  document.getElementById('root')
);

