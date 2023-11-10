import React from "react";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow
          isHeader={true}
          textFirstCell="Available courses"
          textSecondCell={null}
        />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propType = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
