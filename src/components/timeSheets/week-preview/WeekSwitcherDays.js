import React from "react";
import { Link } from "react-router-dom";

const WeekSwitcherDays = (props) => {
  return (
    <li
      key={props.date}
      className={props.day === props.elementDay ? "active" : ""}
    >
      <Link to={`/timesheet/${props.year}/${props.month}/${props.day}`}>
        <b>{props.dayShortName}</b>
        <span>{props.dayName}</span>
      </Link>
    </li>
  );
};

export default WeekSwitcherDays;
