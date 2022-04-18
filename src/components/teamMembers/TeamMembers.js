import React from "react";
import TeamMembersReports from "./TeamMembersReports";
import AlphaFilter from "../../shared/components/Filters/AlphaFilter";
import Pagination from "../../shared/components/pagination/Pagination";
import TeamMembersList from "./TeamMembersList";
import Header from ".././../shared/components/header/Header";
import Footer from ".././../shared/components/footer/Footer";

const TeamMembers = (props) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico projects"></i>Team members
          </h2>
          <TeamMembersReports create={props.create} roles={props.roles} />
          <AlphaFilter alphaSearch={props.alphaSearch} />
          <TeamMembersList
            teamMembers={props.teamMembers}
            update={props.update}
            delete={props.delete}
            roles={props.roles}
          />
          <Pagination get={props.getTeamMembers} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TeamMembers;
