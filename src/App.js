import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Product from "./components/pages/product/Product";
import Service from "./components/pages/service/Service";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/product' component={Product} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
