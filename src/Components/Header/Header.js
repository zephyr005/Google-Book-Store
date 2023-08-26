import React, { useState } from "react";
import logo1 from "../../assest/KeazoNBOOKS.png";
import logo2 from "../../assest/Standard Collection 11.png";
import sign1 from "../../assest/bx_bx-book-heart.png";
import sign2 from "../../assest/ic_round-notifications-none.png";
import sign3 from "../../assest/fluent_premium-person-20-regular.png";
import sign4 from "../../assest/IMG20210528181544.png";

import "./Header.css";

const Header = ({ setSearch }) => {
  const [input, setInput] = useState("");

  function update() {
    if (input.trim() === "") {
      return;
    }
    setSearch(input);
    setInput("");
  }

  return (
    <div className="Header">
      <div className="Header-logo">
        <img src={logo2} alt="brand logo" className="logo1" />
        <img src={logo1} alt="brand name" className="logo2" />
      </div>
      <div className="Header-search-bar">
        <div className="inner-search-bar">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            value={input}
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit" className="search-bar" onClick={update}>
          Search
        </button>
      </div>
      <div className="menu-bar hidden">
        <span className="material-symbols-outlined menu">menu</span>
      </div>
      <div className="Header-nav hidden">
        <img src={sign1} alt="books" />
        <img src={sign2} alt="books" />
        <img src={sign3} alt="books" />
        <img src={sign4} alt="books" />
      </div>
    </div>
  );
};

export default Header;
