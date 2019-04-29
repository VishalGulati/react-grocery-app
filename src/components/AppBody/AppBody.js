import React, { Component } from 'react';
import './AppBody.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Items from '../../containers/Items/Items';
import Cart from '../../containers/Cart/Cart';

/**
 * The application body
 */
class AppBody extends Component {
  render() {
    return (
      <div className="app-body container-fluid">
        <div className="app-links">
          <Link className="app-nav-link" to="/cart">
            Cart
          </Link>
          <Link className="app-nav-link" to="/">
            Back to Storefront
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/react-grocery-app" />}
          />
          <Route path="/react-grocery-app" component={Items} />
          <Route path="/cart" component={Cart} />
          <Route path="*" render={() => <Redirect to="/react-grocery-app" />} />
        </Switch>
      </div>
    );
  }
}

export default AppBody;
