import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReportsFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <div className="grey-box-wrap reports">
        <ul className="form">
          <li>
            <label>Team member:</label>
            <select>
              <option>All</option>
            </select>
          </li>
          <li>
            <label>Category:</label>
            <select>
              <option>All</option>
            </select>
          </li>
        </ul>
        <ul className="form">
          <li>
            <label>Client:</label>
            <select>
              <option>All</option>
            </select>
          </li>
          <li>
            <label>Start date:</label>
            <DatePicker
              className="in-text datepicker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </li>
        </ul>
        <ul className="form last">
          <li>
            <label>Project:</label>
            <select>
              <option>All</option>
            </select>
          </li>
          <li>
            <label>End date:</label>
            <DatePicker
              className="in-text datepicker .ui-datepicker .ui-datepicker-title"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </li>
          <li>
            <a href="#" className="btn orange right">
              Reset
            </a>
            <a href="#" className="btn green right">
              Search
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportsFilter;
