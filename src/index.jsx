import '/node_modules/primeflex/primeflex.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import store from './redux/store'
import {Provider} from 'react-redux'

document.addEventListener("DOMContentLoaded", (event) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
})