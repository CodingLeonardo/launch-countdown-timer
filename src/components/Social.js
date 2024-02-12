import React from "react";

import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Pinterest from "../images/icon-pinterest.svg";
import "../css/Social.css";

const Social = () => {
  return (
    <aside className="Social">
      <a href="#" className="Social-link">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="#" className="Social-link">
        <img src={Pinterest} alt="Pinterest" />
      </a>
      <a href="#" className="Social-link">
        <img src={Instagram} alt="Instagram" />
      </a>
    </aside>
  );
};

export default Social;
