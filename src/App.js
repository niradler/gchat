import React, { Component } from "react";
import Rooms from "./components/Rooms";
import Room from "./components/Room";
import SignIn from "./components/SignIn";
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={SignIn} />
          <Route path="/rooms" component={requireAuth(Rooms)} />
          <Route path="/room/:id" component={requireAuth(Room)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
