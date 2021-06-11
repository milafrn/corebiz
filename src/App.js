import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Shelf from "./components/Shelf";
import Newsletter from "./components/Newsletter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

function App() {
  const [quantity, setQuantity] = useState(
    Number(localStorage.getItem("quantity")) || 0
  );

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Header quantity={quantity} />}
          />
        </Switch>
      </Router>
      <Banner />
      <Shelf shelfTitle="Mais Vendidos" productQuantity={setQuantity} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
