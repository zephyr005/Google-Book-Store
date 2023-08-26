import React from "react";
import "./Card.css";

const Card = ({ data, setCardId, setIfChecked, ifChecked, cardId }) => {
  function handleClick() {
    window.open(data[0].volumeInfo.infoLink, "_blank");
  }

  function prevPage() {
    if (cardId) {
      setCardId("");
    } else if (ifChecked) {
      setIfChecked("");
    }
  }

  return (
    <div className="Card">
      <div className="images">
        <img
          key={data[0]?.id}
          src={data[0]?.volumeInfo.imageLinks.smallThumbnail}
          alt={data[0]?.volumeInfo.title}
        />
      </div>
      <div className="book-description-details">
        <div className="title">
          <h3>{data[0]?.volumeInfo.title}</h3>
          <p>Published On: {data[0]?.volumeInfo.publishedDate}</p>
        </div>
        <p className="author">{
        data[0].volumeInfo.authors ? data[0].volumeInfo.authors[0] : "No Author"
        }</p>
        <p className="book-dis">
          {data[0]?.volumeInfo.description || "No Content"}
        </p>
        <div className="rating">
          <p>
            <span>Avg Rating: {data[0]?.volumeInfo.averageRating} </span> |
            <span> Rating Count: {data[0]?.volumeInfo.ratingsCount} </span> |
            <span> Publisher: {data[0]?.volumeInfo.publisher} </span> |
            <span> Language: {data[0]?.volumeInfo.language} </span>
          </p>
        </div>
        <div className="card-btn">
          <button type="submit" onClick={prevPage}>
            Now Read!
          </button>
          <button type="submit" onClick={handleClick}>
            More Info!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
