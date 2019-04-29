import React, { Component } from 'react';
import './Items.css';
import { API } from '../../axios/http-client';
import Item from '../../components/Item/Item';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

/**
 * The application body
 */
class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }

  fetchTasks = () => {
    API.get('api.json')
      .then(res => {
        this.setState({
          items: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getStockItems = () => {
    return this.state.items
      ? this.state.items.map((item, index) => {
          return (
            <Item
              key={item.productId}
              data={item}
              addItemToCart={this.addItemToCart}
            />
          );
        })
      : 'Loading...';
  };

  addItemToCart = item => {
    this.props.onAddToCart(item);
  };

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <div className="app-body container-fluid">
        <div className="row">{this.getStockItems()}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: item =>
      dispatch({ type: actionTypes.ADD_TO_CART, payload: { item } })
  };
};

export default connect(null, mapDispatchToProps)(Items);
