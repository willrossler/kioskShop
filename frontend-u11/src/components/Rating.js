import React from "react";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        {[...Array(5)].map((_, i) => {
          const cls =
            value >= i + 1
              ? "fas fa-star" //full star
              : value >= i + 0.5
              ? "fas fa-star-half-alt" //half star
              : "far fa-star"; //empty star
          return <i key={"Star" + i} style={color} className={cls} />;
        })}
      </span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
