import React from "react";
import { Link } from "react-router-dom";

const TimeSheetCalendarDays = (props) => {
  return (
    <td className={`${props.class}`}>
      <div className="date">
        <span>{props.day}.</span>
      </div>
      <div className="hours">
        <Link to="">
          Hours: <span>{props.hours}</span>
        </Link>
      </div>
    </td>
  );
};

export default TimeSheetCalendarDays;
