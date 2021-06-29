import React from "react";
import Countdown from "./components/Countdown.js";
import "./css/App.css";

import Hills from "./images/pattern-hills.svg";
import Facebook from "./images/icon-facebook.svg";
import Instagram from "./images/icon-instagram.svg";
import Pinterest from "./images/icon-pinterest.svg";

const Social = () => {
  return (
    <div className="Social">
      <a href="#" className="Social-link">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="#" className="Social-link">
        <img src={Pinterest} alt="Pinterest" />
      </a>
      <a href="#" className="Social-link">
        <img src={Instagram} alt="Instagram" />
      </a>
    </div>
  );
};

const App = () => {
  const date = new Date("August 16, 2021 12:30");
  return (
    <>
      <div className="App">
        <div className="App-countdown">
          <h1>We're launching soon</h1>
          <Countdown date={date} />
        </div>
        <div className="App-hills">
          <img src={Hills} alt="Hills" />
          <Social />
        </div>
      </div>
    </>
  );
};

export default App;
