import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import {ConfigureStore} from "./app/store/ConfigureStore"
import ScrollToTop  from "./app/common/util/ScrollToTop"


const store = ConfigureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop>
     <App />
    </ScrollToTop>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
