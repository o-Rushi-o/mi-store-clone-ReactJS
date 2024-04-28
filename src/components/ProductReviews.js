import React from "react";
import ProductReviewCard from "./ProductReviewCard.js";
import "../style/ProductReviews.css";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((item, index) => (
        <ProductReviewCard
          price={item.price}
          name={item.name}
          review={item.review}
          image={item.image}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
