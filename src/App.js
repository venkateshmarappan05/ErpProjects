import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import TestPage from 'components/pages/TestPage';
import PropTypes from "prop-types";

import 'assets/css/style.css'
import 'assets/css/common.css'
import 'react-notifications/lib/notifications.css';

// ======= Master ======== //
 import Brand from 'components/pages/Master/Brand/BrandPage'
// import Category from 'components/pages/Master/Category/CategoryPage'
// import Customer from 'components/pages/Master/Customer/CustomerPage'
// import User from 'components/pages/Master/User/UserPage'
//==============================================
 import DashBoardPage from 'components/pages/Dashboard/DashBoardPage'
// import ProductPage from 'components/pages/Master/Product/ProductPage'
 //import Inventorypage from 'components/pages/Inventory/InventoryPage'
 //import TransctionPage from 'components/pages/Transaction/TransctionPage'

 

const App = ({ location }) => (
  <div>
    <Switch>
      <Route location={location} path="/" exact component={DashBoardPage} />

      {/* <Route location={location} path="/master/product" exact component={ProductPage} />
      <Route location={location} path="/inventory" exact component={Inventorypage} />
      <Route location={location} path="/transction" exact component={TransctionPage} /> */}

      <Route location={location} path="/master/brand" exact component={Brand} /> 
      {/* <Route location={location} path="/master/category" exact component={Category} /> 
      <Route location={location} path="/master/customer" exact component={Customer} /> 
      <Route location={location} path="/master/user" exact component={User} />  */}
      <Route location={location} path="/test" exact component={TestPage} /> 
    </Switch>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;

