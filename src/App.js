import React from "react";
import Header from "./components/Header";
import Orders from "./components/Orders";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <Orders />
    </div>
  );
};

export default App;
