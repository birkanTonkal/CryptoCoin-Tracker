import useFetch from "./components/useFetch";
import "./App.scss";
import React, { Fragment, useState } from "react";
import Coins from "./components/Coins";
import searchIcon from "./icons/search.png"

function App() {
  const { loading, coins, error } = useFetch();
  const [searchValue, searchValueHandler] = useState("");

  const onChangeHandler = (e) => {
    searchValueHandler(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <Fragment>
      <div className="search_bar_container">
        <img src={searchIcon} alt="" />
        <input className="search_bar" type="text" onChange={onChangeHandler} placeholder="Hi there! Search for coin :)"/>
      </div>
      <div className="wrapper">
        {!loading && <Coins coinsData={filteredCoins} />}
        {error && <h1>Error. Try Refreshing.</h1>}
      </div>
    </Fragment>
  );
}

export default App;
