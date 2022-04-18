import React from "react";
import TeamMembersListItem from "./TeamMembersListItem";

const TeamMembersList = (props) => {
  return (
    <div className="accordion-wrap projects">
      {props.teamMembers.map((teamMember, index) => (
        <TeamMembersListItem
          key={index}
          teamMember={teamMember}
          update={props.update}
          delete={props.delete}
          roles={props.roles}
        />
      ))}
    </div>
  );
};

export default TeamMembersList;
