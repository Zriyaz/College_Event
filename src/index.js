import React from 'react';
import ReactDOM from 'react-dom';
import "react-redux-toastr/lib/css/react-redux-toastr.min.css"
import './index.css';
import App from './app/layout/App';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import ReduxToastr from "react-redux-toastr"
import {ConfigureStore} from "./app/store/ConfigureStore"
import ScrollToTop  from "./app/common/util/ScrollToTop"
import {loadEvents} from "./features/events/eventActions"


const store = ConfigureStore()
store.dispatch(loadEvents())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop>
     <ReduxToastr 
       position = 'bottom-right'
       transitionIn = 'fedeIn' 
       transitionOut = 'fadeOut'
     />
     <App />
    </ScrollToTop>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
