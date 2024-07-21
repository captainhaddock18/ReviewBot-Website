import React from "react";
import TeamMember from './TeamMember';
import Header from "./Header";

const teamMember = [
    {
        name: 'di',
        quote: 'ss',
        photo: 'phot',
        links: 'lin'
    }
]

const Team = () => {
        return (
            <div>
                <Header />
            <div className="team">
                {teamMember.map((member, index) => (
                <TeamMember
                    key={index}
                    name={member.name}
                    quote = {member.quote}
                    photo={member.photo}
                    links = {member.links}
                />
                ))}
            </div>
          </div>
          
        );
      };

export default Team;