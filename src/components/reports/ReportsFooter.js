import React from "react";

const ReportsFooter = (props) => {
  return (
    <div>
      <div class="total">
        <span>
          Report total: <em>7.5</em>
        </span>
      </div>
      <div class="grey-box-wrap reports">
        <div class="btns-inner">
          <a href="javascript:;" class="btn white">
            <span>Print report</span>
          </a>
          <a href="javascript:;" class="btn white">
            <span>Create PDF</span>
          </a>
          <a href="javascript:;" class="btn white">
            <span>Export to excel</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReportsFooter;
