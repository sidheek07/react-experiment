import React from "react";
import "./App.css";
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import NotFoundPage from './pages/NotFoundPage';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

  class App extends React.Component {
    render(){
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
 )
}
}
export default App;