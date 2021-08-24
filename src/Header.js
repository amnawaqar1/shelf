import React from "react";

import "./index.css";
import Bookdisplay from "./Shelf";

const Header = ({ result }) => {
  return (
    <div>
      <header>
        <h1>
          My <span>Reads</span>
        </h1>
      </header>
      <main>
        {" "}
        <Bookdisplay Data={result} />{" "}
      </main>
    </div>
  );
};
export default Header;
