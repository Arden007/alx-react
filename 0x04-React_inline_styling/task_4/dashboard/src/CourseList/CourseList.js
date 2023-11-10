import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.table)}>
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

const styles = StyleSheet.create({
  table: {
    display: "table",
    border: "1px solid",
    borderCollapse: "collapse",
    margin: "2rem auto 0 auto",
    width: "90%",
  },
});

export default CourseList;
