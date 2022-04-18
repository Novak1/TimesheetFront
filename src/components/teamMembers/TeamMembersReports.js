import React from "react";
import NewTeamMember from "./NewTeamMember";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

function TeamMembersReports(props) {
  const context = useContext(AuthContext);

  return (
    <div>
      {context.roles.find((r) => r === "Admin") !== undefined && (
        <div className="grey-box-wrap reports">
          <NewTeamMember create={props.create} roles={props.roles} />
        </div>
      )}
    </div>
  );
}

export default TeamMembersReports;
