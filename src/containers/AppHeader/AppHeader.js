import React, { Component } from 'react';
import './AppHeader.css';
import Autocomplete from '../../containers/Autocomplete/Autocomplete';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * The application header
 */
class AppHeader extends Component {
  getSum = (total, productId) => {
    return total + Math.round(this.props.cart[productId].count);
  };

  getCartItemsLength = () => {
    const cartState = { ...this.props.cart };
    return Object.keys(cartState).reduce(this.getSum, 0);
  };

  navigateToCart = () => {
    this.props.history.push('/cart');
  };

  render() {
    return (
      <header className="app-header">
        Grocery App
        <Autocomplete
          suggestions={[
            'Saffola Oil',
            'Surf Excel',
            'Dairy Milk',
            'Lays Chips',
            'Good Day Buiscuit',
            'Coca Cola'
          ]}
        />
        <div className="cart-indicator">
          <i
            className="fas fa-shopping-cart cart-icon"
            onClick={this.navigateToCart}
          />
          <span className="cart-length-ind">{this.getCartItemsLength()}</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    cart: store.cart
  };
};

AppHeader.propTypes = {
  cart: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(AppHeader));
