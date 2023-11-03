import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseListRow/CourseList";
import './App.css';
import PropTypes from "prop-types";

function App({isLoggedIn}) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login/>}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
