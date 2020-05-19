import React from "react";

export const Home = () => (
  <>
    <div class="jumbotron">
      <h1 class="display-3">Welcome to My Note App</h1>
      <p class="lead">
        This app allows you to create and save notes that only you have access
        too.
      </p>
      <hr class="my-4" />
      <p>Please register an account or login.</p>
      <p class="lead">
        <a
          class="btn btn-outline-primary btn-lg btn-block"
          href="/register"
          role="button"
        >
          Register
        </a>
        <a
          class="btn btn-outline-success btn-lg btn-block"
          href="/login"
          role="button"
        >
          Login
        </a>
      </p>
    </div>
  </>
);
