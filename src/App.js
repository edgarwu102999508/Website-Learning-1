import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Navbar />
        <Route exact path='/' component={Home}>
          <Home></Home>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
