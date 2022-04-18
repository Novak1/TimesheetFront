import moment from "moment";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MonthSwitcher = (props) => {
  const [prevMonth, setPrevMonth] = useState();
  const [nextMonth, setNextMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    getPrevMonth();
    getNextMonth();
    setYear(Number(props.year));
  }, [props.year, props.month]);

  const getPrevMonth = () => {
    if (Number(props.month) - 1 === 0) {
      setYear(Number(props.year) - 1);
      setPrevMonth(12);
      return;
    }
    setPrevMonth(Number(props.month) - 1);
  };
  const getNextMonth = () => {
    if (Number(props.month) + 1 === 13) {
      setYear(Number(props.year) + 1);
      setNextMonth(1);
      return;
    }
    setNextMonth(Number(props.month) + 1);
  };

  return (
    <div>
      <div className="grey-box-wrap">
        <div className="top">
          <Link
            to={`/timesheet/monthpreview/${prevMonth}/${year}`}
            className="prev"
          >
            <i className="zmdi zmdi-chevron-left"></i>previous month
          </Link>
          <span className="center">
            {moment.months()[props.month - 1]}, {props.year}
          </span>
          <Link
            to={`/timesheet/monthpreview/${nextMonth}/${year}`}
            className="next"
          >
            next month<i className="zmdi zmdi-chevron-right"></i>
          </Link>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default MonthSwitcher;
