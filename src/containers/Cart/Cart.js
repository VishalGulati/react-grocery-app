import React, { Component, Fragment } from 'react';
import './Cart.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import PropTypes from 'prop-types';

/**
 * The application cart
 */
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: 0,
      cartDiscount: 0
    };
  }
  isCartEmpty = () => {
    const cartState = { ...this.props.cart };
    return Object.keys(cartState).length === 0;
  };

  getCartItemsList = () => {
    const cartState = { ...this.props.cart };
    return Object.keys(cartState).map((keyName, i) => (
      <div className="cart-item row" key={keyName}>
        <div className="col-sm-4">
          <img
            className="cart-item-img"
            src={cartState[keyName].img}
            alt={cartState[keyName].productName}
          />
        </div>
        <div className="col-sm-8 cart-item-details">
          <span className="cart-percent-ind">
            {cartState[keyName].discountPercent}% OFF
          </span>
          <div>{cartState[keyName].productName}</div>
          <div>{cartState[keyName].quantity}</div>
          <div className="cart-item-calculation row">
            <span
              onClick={() => this.props.decrementQty(keyName)}
              className="cart-item-plusminus"
            >
              &nbsp;-&nbsp;
            </span>
            <span>{cartState[keyName].count}</span>
            <span
              onClick={() => this.props.incrementQty(keyName)}
              className="cart-item-plusminus"
            >
              &nbsp;+&nbsp;
            </span>
            <span>X</span>
            <span>&#x20b9;{cartState[keyName].discountPrice}</span>
            <s>&#x20b9;{cartState[keyName].mrp}</s>
            <span className="cart-item-total">
              &#x20b9;{cartState[keyName].count *
                cartState[keyName].discountPrice}
            </span>
          </div>
        </div>
      </div>
    ));
  };

  getSum = (total, productId) => {
    return total + Math.round(this.props.cart[productId].count);
  };

  getCartItemsLength = () => {
    const cartState = { ...this.props.cart };
    return Object.keys(cartState).reduce(this.getSum, 0);
  };

  getSumOfItemsPrice = (total, productId) => {
    return (
      total +
      Math.round(
        this.props.cart[productId].count *
          this.props.cart[productId].discountPrice
      )
    );
  };

  getCartTotal = () => {
    const cartState = { ...this.props.cart };
    return Object.keys(cartState).reduce(this.getSumOfItemsPrice, 0);
  };

  applyDiscount = () => {
    const randomDiscount = Math.floor(Math.random() * 8) + 8;
    this.setState({
      discount: randomDiscount,
      cartDiscount: (this.getCartTotal() + 29) * ((100 - randomDiscount) / 100)
    });
  };

  render() {
    return (
      <div className="cart">
        {this.isCartEmpty() ? (
          <h4 className="cart-empty">Your cart is Empty!</h4>
        ) : (
          <div>
            <h1>
              My cart <span>{`(${this.getCartItemsLength()} items)`}</span>
            </h1>
            <div className="cart-total row">
              <div className="col-sm-6">Sub Total</div>
              <div className="col-sm-6">&#x20b9;{this.getCartTotal()}</div>
            </div>
            <div className="row">
              <div className="col-sm-6">Delivery Charges</div>
              <div className="col-sm-6">&#x20b9;29</div>
            </div>
            {this.getCartItemsList()}
            {this.state.discount !== 0 ? (
              <h3>
                Congratulations, you just got {this.state.discount}% OFF, just
                pay {Math.ceil(this.state.cartDiscount)}!
              </h3>
            ) : (
              <Fragment>
                <h5>
                  You think you're lucky, lets see by clicking this button
                </h5>
                <button
                  className="btn btn-success"
                  onClick={this.applyDiscount}
                >
                  Check Discount
                </button>
              </Fragment>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    cart: store.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decrementQty: productId =>
      dispatch({
        type: actionTypes.DECREMENT_QUANTITY,
        payload: { productId }
      }),
    incrementQty: productId =>
      dispatch({ type: actionTypes.INCREMENT_QUANTITY, payload: { productId } })
  };
};

Cart.propTypes = {
  cart: PropTypes.object,
  decrementQty: PropTypes.func,
  incrementQty: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
