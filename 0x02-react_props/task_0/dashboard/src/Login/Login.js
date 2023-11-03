import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <React.Fragment>
      <div class="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label forhtml="email">Email address: </label>
          <input type="email" name="email"></input>
          <label forhtml="password">Password: </label>
          <input type="password" name="password"></input>
          <button>Ok</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
