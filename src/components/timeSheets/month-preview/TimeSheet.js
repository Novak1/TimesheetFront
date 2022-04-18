import React from "react";
import TimeSheetTotalHours from "./TimeSheetsTotalHours";
import Header from "../../../shared/components/header/Header";
import Footer from "../../../shared/components/footer/Footer";
import MonthSwitcher from "./MonthSwitcher";
import TimeSheetsCalendar from "./TimeSheetsCalendar";

const TimeSheet = (props) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico timesheet"></i>TimeSheet
          </h2>
          <MonthSwitcher month={props.month} year={props.year} />
          <TimeSheetsCalendar
            hours={props.hours}
            month={props.month}
            year={props.year}
          />
          <TimeSheetTotalHours />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TimeSheet;
