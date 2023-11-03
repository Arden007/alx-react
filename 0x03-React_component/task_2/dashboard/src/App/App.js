import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseListRow/CourseList";
import "./App.css";
import PropTypes from "prop-types";
import { getLatestNotifications } from "../utils/utils";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotifications() },
];

class App extends React.Component {
  // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  /*
    Called immediately before a component is destroyed. Perform any necessary cleanup in this method,
    such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount
  */
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={this.listNotifications} />
        <div className="App">
          <Header />
          {this.props.isLoggedIn ? (
            <CourseList listCourses={this.listCourses} />
          ) : (
            <Login />
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
