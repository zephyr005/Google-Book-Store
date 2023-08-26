import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import BooksSection from "./Components/BooksSection/BooksSection";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [search, setSearch] = useState("");
  const [ifChecked, setIfChecked] = useState("");
  const [cardId, setCardId] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          search || "Sherlock+Holmes"
        }`
      )
      .then((response) => {
        setData(response.data.items);
        setIfChecked("");
        setCardId("");
      });
  }, [search]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then((response) => {
        setData2(response.data.items);
      });
  }, []);

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <div className="display-books">
        {data && (
          <Hero
            data={[...data, ...data2]}
            ifChecked={ifChecked}
            setIfChecked={setIfChecked}
            cardId={cardId}
            setCardId={setCardId}
          />
        )}

        {ifChecked ? <h3>More Books Like This</h3> : <h3>More Books</h3>}
        <div className="books">
          {data &&
            data.map((book) => (
              <BooksSection
                id={book?.id}
                title={book?.volumeInfo.title}
                img={book?.volumeInfo.imageLinks?.smallThumbnail}
                setIfChecked={setIfChecked}
              />
            ))}

          {data2 &&
            !search &&
            data2.map((book) => (
              <BooksSection
                id={book?.id}
                title={book?.volumeInfo.title}
                img={book?.volumeInfo.imageLinks?.smallThumbnail}
                setIfChecked={setIfChecked}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
