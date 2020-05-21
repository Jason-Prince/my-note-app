import React from "react";

export const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-3">Welcome to My Note App</h1>
        <p className="lead">
          This app allows you to create and save notes that only you have access
          too.
        </p>
        <hr className="my-4" />
        <p>Please register an account or login.</p>
        <p className="lead">
          <a
            className="btn btn-outline-primary btn-lg btn-block"
            href="/register"
            role="button"
          >
            Register
          </a>
          <a
            className="btn btn-outline-success btn-lg btn-block"
            href="/login"
            role="button"
          >
            Login
          </a>
        </p>
      </div>
    </>
  );
};
