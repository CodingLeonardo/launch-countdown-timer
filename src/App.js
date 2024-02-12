import React from "react";
import Countdown from "./components/Countdown.js";
import Social from "./components/Social.js";
import "./css/App.css";

import Hills from "./images/pattern-hills.svg";

const App = () => {
  const date = new Date("August 16, 2024 12:30");
  return (
    <>
      <main className="App">
        <section className="App-countdown">
          <h1>We're launching soon</h1>
          <Countdown date={date} />
        </section>
        <footer className="App-hills">
          <img className="App-hills__img" src={Hills} alt="Hills" />
          <Social />
        </footer>
      </main>
    </>
  );
};

export default App;
