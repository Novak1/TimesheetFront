import React from "react";
import Header from "../../../shared/components/header/Header";
import Footer from "../../../shared/components/footer/Footer";
import WeekTotal from "./WeekTotal";
import WeekSwitcher from "./WeekSwitcher";
import WeekTable from "./WeekTable";
const WeekTimeSheet = (props) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico timesheet"></i>TimeSheet
          </h2>
          <WeekSwitcher month={props.month} year={props.year} day={props.day} />
          <WeekTable timesheets={props.timesheets} />
          <WeekTotal month={props.month} year={props.year} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WeekTimeSheet;
