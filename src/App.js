// import logo from './logo.svg';
import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import AddCustomer from "./components/users/AddCustomer";
import EditCustomer from "./components/users/EditCustomer";
import Customer from "./components/users/Customer";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddCustomer} />
          <Route exact path="/users/edit/:id" component={EditCustomer} />
          <Route exact path="/users/:id" component={Customer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;