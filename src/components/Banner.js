import React from "react";

const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
      <div className="banner__overlay"></div>
      {title && <h2 className="banner__title">{title}</h2>} {/* :null */}
    </div>
  );
};

export default Banner;
