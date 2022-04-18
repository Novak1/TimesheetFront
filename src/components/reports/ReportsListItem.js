import React from "react";

const ReportsListItem = (props) => {
  return (
    <tr>
      <td>{props.report.date}</td>
      <td>{props.report.teamMemberName}</td>
      <td>{props.report.projectName}</td>
      <td>{props.report.category}</td>
      <td>{props.report.description}</td>
      <td class="small">{props.report.time}</td>
    </tr>
  );
};

export default ReportsListItem;
