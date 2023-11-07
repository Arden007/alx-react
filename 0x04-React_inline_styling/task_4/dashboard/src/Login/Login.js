import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <React.Fragment>
      <div className={css(styles.app)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label forhtml="email">Email address: </label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
          ></input>
          <label forhtml="password">Password: </label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
          ></input>
          <button>Ok</button>
        </form>
      </div>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  app: {
    padding: "36px 24px",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "0 16px 0 8px",
  },
});
export default Login;
