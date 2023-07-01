import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="left-nav">Shopping Cart</div>
      <div className="right-nav">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home Page
        </button>
        <button
          onClick={() => {
            navigate("cart");
          }}
        >
          Cart Page
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
