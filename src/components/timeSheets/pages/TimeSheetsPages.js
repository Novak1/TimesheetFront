import React, { useState, useEffect } from "react";
import TimeSheet from "../month-preview/TimeSheet";
const TimeSheetsPages = (props) => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    getHoursByDays();
  }, []);

  const getHoursByDays = () => {};
  return (
    <React.Fragment>
      {hours && (
        <TimeSheet
          hours={hours}
          year={props.match.params.year}
          month={props.match.params.month}
        />
      )}
    </React.Fragment>
  );
};

export default TimeSheetsPages;
