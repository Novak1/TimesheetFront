import React, { useState, useEffect } from "react";
import moment from "moment";
import TimeSheetsCalendardays from "./TimeSheetCalendarDays";

const TimeSheetsCalendar = (props) => {
  const [weekDays, setWeekDays] = useState([]);
  const [firstDay, setFirstDay] = useState(0);
  const [lastDay, setLastDay] = useState(0);

  useEffect(() => {
    getWeekDays();
    firstAndLastDayOfMonth();
  }, [props.month, props.year]);

  const getWeekDays = () => {
    let days = moment.weekdays();
    setWeekDays(days);
  };

  const firstAndLastDayOfMonth = () => {
    let fday = moment()
      .month(props.month - 1)
      .year(props.year)
      .startOf("month")
      .format("d");
    setFirstDay(fday);
    let lday = moment()
      .month(props.month - 1)
      .year(props.year)
      .endOf("month")
      .format("d");
    setLastDay(lday);
  };

  const getMonthDays = (year, month) => {
    let numOfDays = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();

    return numOfDays;
  };

  const getPrevMonthDays = () => {
    return getMonthDays(props.year, props.month - 2);
  };

  const formUpCalendar = () => {
    let nextM = 1;
    let prevM = getPrevMonthDays();
    let day = 1;
    let htmlRow = [];
    let rowArr = [];
    let retHtml = [];

    for (let row = 1; row <= 5; row++) {
      for (let cell = 0; cell <= 6; cell++) {
        if (firstDay > cell && row === 1) {
          rowArr.push(
            <TimeSheetsCalendardays day={prevM-- - firstDay} class="disable" />
          );
        } else if (lastDay < cell && row === 5) {
          rowArr.push(<TimeSheetsCalendardays day={nextM++} class="disable" />);
        } else {
          rowArr.push(
            <TimeSheetsCalendardays day={day} class="positive previous" />
          );
          day++;
        }
      }
      htmlRow.push(rowArr);
      rowArr = [];
      retHtml.push(htmlRow);
      htmlRow = [];
    }
    return retHtml;
  };

  return (
    <div>
      <table className="month-table">
        <thead className="head">
          <tr className="head">
            {weekDays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {formUpCalendar().map((calendarRows) => (
            <tr>{calendarRows}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeSheetsCalendar;
