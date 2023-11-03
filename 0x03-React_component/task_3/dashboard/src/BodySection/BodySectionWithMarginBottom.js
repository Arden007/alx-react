import React from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";
import PropTypes from "prop-types";

class BodySectionWithMarginBottom extends React.Component() {
    render() {
        const { title, children } = this.props;
        return (
          <div className="bodySectionWithMargin">
            <BodySection title={title}>{children}</BodySection>
          </div>
        );
    }
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BodySectionWithMarginBottom;
