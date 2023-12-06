import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { connect } from "react-redux";

const Footer = ({ user }) => {
  return (
    <div className="App-footer">
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
};

// Create a mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.uiReducer.user,
});

// Connect the Footer component to the Redux store
export default connect(mapStateToProps)(Footer);
