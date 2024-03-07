import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const row = { backgroundColor: "#f5f5f5ab" };
  const header = { backgroundColor: "#deb5b545" };
  const styleSelect = isHeader ? header : row;
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (e) => {
    setChecked(!checked);
  };

  return (
    <tr
      style={styleSelect}
      className={checked ? css(listRowStyles.rowChecked) : ""}
    >
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(listRowStyles.thcenter)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(listRowStyles.th)}>{textFirstCell}</th>
            <th className={css(listRowStyles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(listRowStyles.td)}>
            <input type="checkbox" onChange={handleCheckChange} />
            {textFirstCell}
          </td>
          <td className={css(listRowStyles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const listRowStyles = StyleSheet.create({
  thcenter: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  td: {
    paddingLeft: 3,
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

export default CourseListRow;
