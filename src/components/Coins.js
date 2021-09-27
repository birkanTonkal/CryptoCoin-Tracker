import React from "react";
import "./Coins.css";

let numberToDollar = Intl.NumberFormat("en-US");
function Coins(props) {
  return (
    <div className="coin-container">
      <table>
        <tbody>
          <tr>
            <td>Rank</td>
            <td>
              <span className="coin_tag_name">Name</span>
            </td>
            <td>Symbol</td>
            <td>Price</td>
            <td>1h %</td>
            <td>24h %</td>
            <td>Market Cap</td>
            <td>Volume</td>
          </tr>

          {props.coinsData.map((coin) => {
            return (
              <tr key={coin.id}>
                <td>{coin.market_cap_rank}</td>
                <td>
                  <img className="coin_img" src={coin.image} alt="" />
                  <span className="coin_name">{coin.name}</span>
                </td>
                <td>{coin.symbol}</td>
                <td>${numberToDollar.format(coin.current_price)}</td>
                <td>
                  {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                </td>
                <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
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
