import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  const display =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  class ExtendComponent extends Component {
    componentDidMount() {
      console.log(`Component ${display} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${display} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  ExtendComponent.displayName = `WithLogging(${display})`;
  return ExtendComponent;
};

export default WithLogging;
