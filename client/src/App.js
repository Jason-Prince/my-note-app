import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./styles/bootstrap.min.css";

import { UserContext } from "./components/UserContext";

import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Note } from "./components/Note";
import { Notes } from "./components/Notes";

import { Layout } from "./components/Layout";
import { Navbar } from "./components/NavBar";

const baseURL = "http://localhost:4000/api";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [notes, setNotes] = useState([]);

  const registrationHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        `${baseURL}/register`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        `${baseURL}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("accessToken", res.data.token);
        localStorage.setItem("userID", res.data.userID);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Create note
  const createNoteHandler = (e) => {
    e.preventDefault();
    const payload = { title, comment };
    const token = localStorage.getItem("accessToken");
    const userID = localStorage.getItem("userID");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(`${baseURL}/${userID}/note`, payload, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get all notes
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userID = localStorage.getItem("userID");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${baseURL}/${userID}/note`, config)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateHandler = (e) => {};

  const deleteHandler = (e) => {};

  return (
    <>
      <Router>
        <Navbar />
        <Layout>
          <Switch>
            <UserContext.Provider
              value={{
                email,
                setEmail,
                password,
                setPassword,
                registrationHandler,
                loginHandler,
                title,
                setTitle,
                comment,
                setComment,
                createNoteHandler,
                notes,
              }}
            >
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/note" component={Note} />
              <Route path="/notes" component={Notes} />
            </UserContext.Provider>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
