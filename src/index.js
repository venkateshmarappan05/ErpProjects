import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer'
import SideNavBar from './components/common/SideNavbar'
import HeaderNavBar from './components/common/HeaderNavBar'
const store = createStore(
   rootReducer,
    applyMiddleware(thunk)
  ) 


render(
    <Provider store={store}>
    <BrowserRouter>
      <div className='wrapper'>
        <SideNavBar/>
        <div className="main">
         <HeaderNavBar/>
          <main className="content">
            <Route component={App} />
          </main>
        </div>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
