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
      <Router>
        <Navbar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/note" component={Note} />
            <Route path="/notes" component={Notes} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
