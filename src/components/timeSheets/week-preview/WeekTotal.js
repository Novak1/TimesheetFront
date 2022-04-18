import React from "react";
import { Link } from "react-router-dom";

const WeekTotal = (props) => {
  return (
    <div className="total">
      <Link to={`/timesheet/${props.month}/${props.year}`}>
        <i></i>back to monthly view
      </Link>
      <span>
        Total hours: <em>7.5</em>
      </span>
    </div>
  );
};

export default WeekTotal;
