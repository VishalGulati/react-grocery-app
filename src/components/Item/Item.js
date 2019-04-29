import React from 'react';
import './Item.css';

/**
 * The application header
 */
const Item = props => {
  const itemInfo = props.data;
  return (
    <div className="item col-sm-3">
      <div className="col-12">
        <span className="off-indicator">{`${itemInfo.discountPercent}% OFF`}</span>
      </div>
      <div className="col-12">
        <img
          src={itemInfo.img}
          className="item-pic"
          alt={itemInfo.productName}
        />
      </div>
      <div className="col-12">{itemInfo.productName}</div>
      <div className="col-12 quantity">{itemInfo.quantity}</div>
      <div className="price-block row">
        <div className="col-4">
          <span>&#x20b9;{itemInfo.discountPrice}</span>
          <s>&#x20b9;{itemInfo.mrp}</s>
        </div>
        <div className="col-8">
          <button
            className="btn btn-atc"
            onClick={() => props.addItemToCart(itemInfo)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
