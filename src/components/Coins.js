import React, { useState, useEffect } from "react";
import "./Coins.scss";
import { alphabeticalSort, numericalSort } from "../Helpers/sorter";
let numberToDollar = Intl.NumberFormat("en-US");

function Coins(props) {
  const [sortedData, sortedDataHandler] = useState([]);
  const [sortOrder, sortOrderHandler] = useState(true);

  useEffect(() => {
    sortedDataHandler(props.coinsData);
  }, [props.coinsData]);

  let clickHandler = (property, sortOrder) => {
    if (property === "name" || property === "symbol") {
      sortedDataHandler([...alphabeticalSort(sortedData, property, sortOrder)]);
    } else {
      sortedDataHandler([...numericalSort(sortedData, property, sortOrder)]);
    }
  };

  let onClickFunction = (coinTag) => {
    clickHandler(coinTag, sortOrder);
    sortOrderHandler((sortOrder) => !sortOrder);
    toggleFlag(coinTag);
  };
  let toggleFlag = (index) => {
    document
      .getElementsByClassName(`coin_tag_${index}`)[0]
      .classList.toggle("on");
  };

  return (
    <div className="coin-container">
      <table>
        <thead>
          <tr className="coin_tag">
            <td
              onClick={() => {
                onClickFunction("market_cap_rank");
              }}
              className="coin_tag_market_cap_rank"
            >
              Rank
            </td>
            <td className="coin_tag_name">
              <span
                onClick={() => {
                  onClickFunction("name");
                }}
              >
                Name
              </span>
            </td>
            <td
              onClick={(e) => {
                onClickFunction("symbol");
              }}
              className="coin_tag_symbol"
            >
              Symbol
            </td>
            <td
              onClick={() => {
                onClickFunction("current_price");
              }}
              className="coin_tag_current_price"
            >
              Price
            </td>
            <td
              onClick={() => {
                onClickFunction("price_change_percentage_1h_in_currency");
              }}
              className="coin_tag_price_change_percentage_1h_in_currency"
            >
              1h %
            </td>
            <td
              onClick={() => {
                onClickFunction("price_change_percentage_24h");
              }}
              className="coin_tag_price_change_percentage_24h"
            >
              24h %
            </td>
            <td
              onClick={() => {
                onClickFunction("market_cap");
              }}
              className="coin_tag_market_cap"
            >
              Market Cap
            </td>
            <td
              onClick={() => {
                onClickFunction("total_volume");
              }}
              className="coin_tag_total_volume"
            >
              Volume
            </td>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((coin) => {
            return (
              <tr key={coin.id}>
                <td>{coin.market_cap_rank}</td>
                <td>
                  <img className="coin_img" src={coin.image} alt="" />
                  <span className="coin_name">{coin.name}</span>
                </td>
                <td>{coin.symbol}</td>
                <td>
                  <span>${numberToDollar.format(coin.current_price)}</span>
                </td>
                <td
                  style={
                    coin.price_change_percentage_1h_in_currency < 0
                      ? { color: "red" }
                      : { color: "green" }
                  }
                >
                  {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                </td>
                <td
                  style={
                    coin.price_change_percentage_24h < 0
                      ? { color: "red" }
                      : { color: "green" }
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${numberToDollar.format(coin.market_cap)}</td>
                <td>${numberToDollar.format(coin.total_volume)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Coins;
