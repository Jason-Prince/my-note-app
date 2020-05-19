import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/bootstrap.min.css";

import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Note } from "./components/Note";
import { Notes } from "./components/Notes";

import { Layout } from "./components/Layout";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/note" component={Note} />
            <Route exact path="/notes" component={Notes} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
