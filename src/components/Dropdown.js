import React from "react";
import arrow from "../assets/arrow.svg";

const Dropdown = ({ title, content }) => {
  const isDown = (event) => {
    event.preventDefault();

    const cat = event.target.nextSibling;
    const arrow = event.target.lastChild;

    if (!cat.classList.contains("show")) {
      cat.classList.add("show");
      arrow.classList.add("rotate");
    } else {
      cat.classList.remove("show");
      arrow.classList.remove("rotate");
    }
  };

  return (
    <div className="dropdown">
      <button type="button" className="dropdown__button" onClick={isDown}>
        <p className="dropdown__title">{title}</p>
        <img src={arrow} alt="" className="dropdown__arrow" />
      </button>
      <div className="dropdown__content">
        {Array.isArray(content) ? (
          <ul className="dropdown__list">
            {content.map((equipment, index) => (
              <li key={index} className="dropdown__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="dropdown__text">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
