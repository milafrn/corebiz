import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </Router>
      <Banner />
    </>
  );
}

export default App;
