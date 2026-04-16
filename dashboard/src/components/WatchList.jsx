import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";


import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import DoughnutChart from "./DoughnutChart";

function WatchList() {
  const labels = watchlist.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut..."
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      {/* List */}
      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem key={index} stock={stock} />
        ))}
      </ul>

      {/* Chart */}
      <DoughnutChart data={data} />
    </div>
  );
}

export default WatchList;





/* ================= ITEM ================= */

function WatchListItem({ stock }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
}





/* ================= ACTIONS ================= */

function WatchListActions({ uid }) {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={handleBuyClick}>
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip>

      <Tooltip title="Analytics (A)" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
}