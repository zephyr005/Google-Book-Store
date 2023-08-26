import React, { useState } from "react";
import "./Hero.css";
import HeroCard from "../HeroCard/HeroCard";
import Card from "../Card/Card";

const Hero = ({ data, ifChecked, setIfChecked, cardId, setCardId }) => {
  

  function selected(cardId, data) {
    let temp = data.filter((sel) => sel.id === cardId);
    return temp;
  }

  return (
    <div className="Hero">
      {ifChecked ? (
        <Card
          data={selected(ifChecked, data)}
          setCardId={setCardId}
          setIfChecked={setIfChecked}
          ifChecked={ifChecked}
        />
      ) : cardId ? (
        <Card
          data={selected(cardId, data)}
          setCardId={setCardId}
          cardId={cardId}
        />
      ) : (
        <>
          <HeroCard
            id={data[0].id}
            title={data[0].volumeInfo.title}
            img={data[0].volumeInfo.imageLinks?.smallThumbnail}
            description={data[0].volumeInfo.description}
            setCard={setCardId}
          />
          <HeroCard
            id={data[1].id}
            title={data[1].volumeInfo.title}
            img={data[1].volumeInfo.imageLinks?.smallThumbnail}
            description={data[1].volumeInfo.description}
            setCard={setCardId}
          />
          <HeroCard
            id={data[2].id}
            title={data[2].volumeInfo.title}
            img={data[2].volumeInfo.imageLinks?.smallThumbnail}
            description={data[2].volumeInfo.description}
            setCard={setCardId}
          />
        </>
      )}
    </div>
  );
};

export default Hero;
