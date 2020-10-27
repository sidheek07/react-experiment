import React from "react";
import "./App.css";
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
