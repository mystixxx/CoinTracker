import React, { useState, useEffect } from "react";
import "./Market.scss";

const Market = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [apiLoad, setApiLoad] = useState(true);
  const paginationButtons = [];

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
  `;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      console.log(json);
    };
    fetchData();
  }, [url]);

  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "activePagi" : ""}
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="market" className="market-section">
        <div className="container">
          <div className="market-content">
            <h2>Market Update</h2>
            <div className="market-content__coin-list">
              <div className="market-content__coin-list__top">
                <p>Coin</p>
                <p>Price</p>
                <p>24h Change</p>
                <p>Market Cap</p>
              </div>
              <div
                onLoad={() => setApiLoad(false)}
                className="market-content__coin-list__row"
              >
                {apiLoad && <span className="loader"></span>}
                {data.map((item) => (
                  <div className="coin-row" key={item.id}>
                    <span>
                      <img src={item.image} alt={item.name} /> {item.name}
                    </span>
                    <p>{"$ " + item.current_price.toFixed(2)}</p>
                    <p
                      className={
                        "slider-coin__price " +
                        (item.price_change_percentage_24h >= 0
                          ? "green-text"
                          : "red-text")
                      }
                    >
                      {item.price_change_percentage_24h?.toFixed(2) + " %"}
                    </p>
                    <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              onClick={scrollMarket}
              className="market-content__coin-list__pagination"
            >
              {paginationButtons}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Market;
