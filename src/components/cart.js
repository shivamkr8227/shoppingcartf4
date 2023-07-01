import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, checkout } from "../redux/actions/cartactions";
import { useState } from "react";

function Cart() {
  const [message, setMessage] = useState("Cart is empty!!!");

  const dispatch = useDispatch();

  let products = useSelector((state) => state.cart);

  let total = 0;

  products.forEach((product) => {
    total += product.price;
  });

  let count = 0;

  return (
    <div className="cart">
      <h1>My Cart</h1>
      {products.length > 0 ? (
        <div className="main">
          <div className="cart-container">
            {products &&
              products.map((product) => (
                <div key={product.id} className="product">
                  <img src={product.thumbnail} alt={product.title} />
                  <p>Title : {product.title}</p>
                  <p>Price : ${product.price}</p>
                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(removeFromCart(product.id));
                    }}
                  >
                    Remove From Cart
                  </button>
                </div>
              ))}
          </div>
          <div className="cart-right">
            <div className="checkout-list">
              <h4>Checkout List</h4>
              {products &&
                products.map((product) => (
                  <div className="cart-content" key={product.id}>
                    <span>
                      {++count}. {product.title}{" "}
                    </span>
                    <span>${product.price} </span>
                  </div>
                ))}
            </div>
            <div className="total-price">
              <b>total</b>
              <span>${total} </span>
            </div>
            <div className="checkout-btn">
              <button
                onClick={() => {
                  dispatch(checkout());
                  if (products.length > 0) {
                    setMessage("Items have been checked out.");
                  } else {
                    setMessage("Cart is empty!!!");
                  }
                }}
              >
                Click To Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
