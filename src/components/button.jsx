import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // Import external CSS file for button styling

const ViewProductButton = ({ onClick }) => {
  return (
    <button className="view-product-btn" onClick={onClick}>
      View Product
    </button>
  );
};

ViewProductButton.propTypes = {
  onClick: PropTypes.func,
};

export default ViewProductButton;