import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { boundLogout } from "../actions/uiActionCreators";

const Header = ({ user, logOut }) => {
  return (
    <div className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
      {user.isLoggedIn && (
        <section id="logoutSection">
          <h2>
            Welcome<strong> {user.email} </strong>
            <em>
              <a href="#" onClick={logOut}>
                (logout)
              </a>
            </em>
          </h2>
        </section>
      )}
    </div>
  );
};

// Create a mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.uiReducer.user,
});

// Create a mapDispatchToProps function
const mapDispatchToProps = {
  logOut: boundLogout,
};

// Connect the Header component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);
