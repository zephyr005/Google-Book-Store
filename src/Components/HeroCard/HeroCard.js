import React from "react";
import "./HeroCard.css";

const HeroSection = ({ id, title, img, description, setCard }) => {
  return (
    <div className="HeroSection">
      <div className="images">
        <img key={id} src={img} alt={title} />
      </div>
      <div className="book-description">
        <h3>{title}</h3>
        <p>
          {description
            ? description.substring(0, 150) + "..."
            : "Click on Now Read for more details"}
        </p>
        <div className="btn">
          <button type="submit" onClick={() => setCard(id)}>
            Now Read!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
