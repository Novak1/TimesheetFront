import React from "react";
import ReportsListItem from "./ReportsListItem";

const ReportsList = (props) => {
  return (
    <div>
      <table class="default-table">
        <tr>
          <th>Date</th>
          <th>Team member</th>
          <th>Projects</th>
          <th>Categories</th>
          <th>Description</th>
          <th class="small">Time</th>
        </tr>
        {props.reports.map((report, index) => (
          <ReportsListItem key={index} report={report} />
        ))}
      </table>
    </div>
  );
};

export default ReportsList;
