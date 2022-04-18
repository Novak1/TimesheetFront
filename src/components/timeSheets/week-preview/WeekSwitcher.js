import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Moment from "moment";
import WeekSwitcherDays from "./WeekSwitcherDays";
import { extendMoment } from "moment-range";

const WeekSwitcher = (props) => {
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(null);
  const [lastDayOfWeek, setLastDayOfWeek] = useState(null);
  const [monthPrev, setMonthPrev] = useState();
  const [yearPrev, setYearPrev] = useState();
  const [monthNext, setMonthNext] = useState();
  const [yearNext, setYearNext] = useState();
  const [dayPrev, setDayPrev] = useState();
  const [dayNext, setDayNext] = useState();

  const [weekNum, setWeekNum] = useState(0);

  const [weekRange, setWeekRange] = useState([]);
  const moment = extendMoment(Moment);

  useEffect(() => {
    getWeekNum();
  }, [props.day]);

  const getWeekNum = () => {
    console.log("daaa");
    let fday = moment([
      Number(props.year),
      Number(props.month) - 1,
      Number(props.day),
    ]).startOf("week");

    setFirstDayOfWeek(fday);

    let lday = moment([
      Number(props.year),
      Number(props.month) - 1,
      Number(props.day),
    ]).endOf("week");

    setLastDayOfWeek(lday);

    setWeekRange(Array.from(moment.range(fday, lday).by("day")));

    let num = moment([props.year, props.month - 1, props.day]).isoWeekday(); //1 monday - 7 sunday
    setWeekNum(num);

    getPrevWeekInfo(fday);
    getNextWeekInfo(lday);
  };

  const getPrevWeekInfo = (first) => {
    let fday = moment(first.clone().add(1, "day")).startOf("week");
    setMonthPrev(fday.format("M"));
    setYearPrev(fday.format("YYYY"));
    setDayPrev(fday.format("DD"));
  };

  const getNextWeekInfo = (last) => {
    let fday = moment(last.clone().add(1, "day")).startOf("week");
    setMonthNext(fday.format("M"));
    setYearNext(fday.format("YYYY"));
  };

  const getPrevWeek = () => {
    let fday = moment(firstDayOfWeek.clone().add(-1, "day")).startOf("week");
    let lday = moment(firstDayOfWeek.clone().add(-1, "day")).endOf("week");

    setFirstDayOfWeek(fday);
    setLastDayOfWeek(lday);
    setWeekRange(Array.from(moment.range(fday, lday).by("day")));

    getPrevWeekInfo(fday);
    getNextWeekInfo(lday);
  };
  const getNextWeek = () => {
    let fday = moment(lastDayOfWeek.clone().add(1, "day")).startOf("week");
    let lday = moment(lastDayOfWeek.clone().add(1, "day")).endOf("week");

    setFirstDayOfWeek(fday);
    setLastDayOfWeek(lday);
    setWeekRange(Array.from(moment.range(fday, lday).by("day")));

    getPrevWeekInfo(fday);
    getNextWeekInfo(lday);
  };

  return (
    <>
      {firstDayOfWeek && lastDayOfWeek && (
        <div className="grey-box-wrap">
          <div className="top">
            <Link
              onClick={() => getPrevWeek()}
              to={`/timesheet/weekpreview/${monthPrev}/${yearPrev}/${dayPrev}`}
              className="prev"
            >
              <i className="zmdi zmdi-chevron-left"></i>previous week
            </Link>

            <span className="center">
              {firstDayOfWeek.format("MMMM DD")} -{" "}
              {lastDayOfWeek.format("MMMM DD")}, {firstDayOfWeek.format("YYYY")}
            </span>

            <Link
              to={`/timesheet/weekpreview/${monthNext}/${yearNext}/${dayNext}`}
              className="next"
              onClick={() => getNextWeek()}
            >
              next week
              <i className="zmdi zmdi-chevron-right"></i>
            </Link>
          </div>
          <div className="bottom">
            <ul className="days">
              {weekRange.map((element) => (
                <WeekSwitcherDays
                  day={weekNum}
                  elementDay={element.day()}
                  date={new Date(props.year, props.month, props.day)}
                  year={props.year}
                  month={props.month}
                  dayShortName={element.format("ddd DD")}
                  dayName={element.format("dddd")}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default WeekSwitcher;
