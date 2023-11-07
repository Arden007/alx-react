import React from 'react';
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const Header = () => {
  return (
    <div className={css(styles["App-header"])}>
      <img src={logo} className={css(styles.img)} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
};

const styles = StyleSheet.create({
  'App-header': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    color: 'red',
    borderBottom: '4px solid red',
    paddingTop: '180px',
},

img: {
    height: '300px',
    width: '300px',
}
});

export default Header;
