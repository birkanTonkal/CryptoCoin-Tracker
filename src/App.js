import useFetch from "./components/useFetch";
import "./App.css";
import React, { Fragment, useState } from "react";
import Coins from "./components/Coins";


function App() {
  const { loading, coins, error } = useFetch();
  const [searchValue, searchValueHandler] = useState('');

  const onChangeHandler = (e) => {
    searchValueHandler(e.target.value);
  }

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchValue.toLowerCase());
  })
  return (
    <Fragment>
      <div className="wrapper">
        <div className="search_bar">
          <input type="text" onChange={onChangeHandler} />
        </div>
        {!loading && <Coins coinsData = {filteredCoins} />}
      </div>
    </Fragment>
  );
}

export default App;
