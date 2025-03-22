// write product card here
import React from "react";
import ViewProductButton from "../components/button"; 
import "./Productcard.css"; 

const Productcard = () => {
  
  const productImage = "https://tmart-8.myshopify.com/cdn/shop/products/04_cd10a204-6265-416d-a026-5f9ef75f611d_grande.jpg?v=1517554070";
  const productName = "Sample Product";
  const productPrice = "$50.00";

  return (
    <div className="product-card">
      <img src={productImage} alt="Product" className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;