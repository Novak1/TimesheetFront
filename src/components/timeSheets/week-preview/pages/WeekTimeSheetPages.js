import React, { useState } from "react";
import WeekTimeSheet from "../WeekTimeSheet";

const WeekTimeSheetPages = (props) => {
  const [timeSheets, setTimeSheets] = useState([]);

  return (
    <React.Fragment>
      {timeSheets && (
        <WeekTimeSheet
          timeSheets={timeSheets}
          year={props.match.params.year}
          month={props.match.params.month}
          day={props.match.params.day}
        />
      )}
    </React.Fragment>
  );
};

export default WeekTimeSheetPages;
