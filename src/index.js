import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './common/header';
import Footer from './common/footer';

import reportWebVitals from './reportWebVitals';
import axios from 'axios';



axios.defaults.baseURL = 'http://127.0.0.1:8000/';

axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<body
  autoComplete="off"
  className="common-home res layout-6"
  oncontextmenu="return false;"
  oncopy="return false"
  oncut="return false"
  ondrag="return false"
  ondrop="return false"
  onpaste="return false;"
  onselectstart="return false"
  style={{
    background: '#f2f2f2',
    color: 'rgb(0, 0, 0)'
  }}
>
  <div
    className="wrapper-fluid banners-effect-5"
    id="wrapper"
  >
    <div id="app" />
    <Header />
    


  </div>
</body>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
