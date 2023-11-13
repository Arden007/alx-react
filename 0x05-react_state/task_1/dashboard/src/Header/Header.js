import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
};

const styles = StyleSheet.create({
  h1: {
    marginLeft: "3rem",
    flex: 2,
    "@media (max-width: 900px)": {
      margin: "auto",
    },
  },

  Appheader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#E11D3F",
    borderBottom: "1px solid #E11D3F",
    maxWidth: "100vw",
    boxSizing: "border-box",
  },

  appLogo: {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "auto",
    width: "auto",
    flex: 1,
  },
});

export default Header;
