import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  productFetchRequest,
  productFetchSuccess,
  productFetchFailure,
} from "../redux/actions/productaction";
import { addToCart } from "../redux/actions/cartactions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productFetchRequest());
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispatch(productFetchSuccess(response.data.products));
      })
      .catch((error) => {
        dispatch(productFetchFailure(error));
      });
  }, []);

  let { products } = useSelector((state) => state.products);

  let cart = useSelector((state) => state.cart);

  function checkCart(id) {
    let count = 0;
    cart.forEach((product) => {
      if (product.id === id) count++;
    });

    if (count > 0) {
      alert("item already present in cart");
      return true;
    }

    return false;
  }

  return (
    <div className="home">
      <h1>All Items</h1>
      <div className="product-container">
        {products &&
          products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.thumbnail} alt={product.title} />
              <p>Title : {product.title}</p>
              <p>Price : ${product.price}</p>
              <button
                className="btn"
                onClick={(e) => {
                  e.target.style.backgroundColor = "gray";
                  if (!checkCart(product.id)) {
                    dispatch(addToCart(product));
                  }
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
