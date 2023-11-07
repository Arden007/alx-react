import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
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
  "App-body": {
    fontSize: '1rem',
    padding: '3rem',
    borderBottom: '4px solid red',
    height: '40%',
  },

  input: {
    margin: "10px",
  },
});
export default Login;
