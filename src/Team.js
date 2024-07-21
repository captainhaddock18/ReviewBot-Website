import React from "react";
import TeamMember from './TeamMember';
import Header from "./Header";
import tharak from "./assets/tharak_mentor.jpeg";
import varshit from "./assets/varshita_mentor.jpeg";
import './TeamMember.css';

const Mentor = [
    {
        name: 'Tharakaddata Hegde',
        quote: 'Quote',
        photo: {tharak},
        gmail: 'https://www.instagram.com/daniegeorgejohn?igsh=MTVjdmQ1OHdwMXBqZw==',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Varshit Manikanta',
        quote: 'Quote',
        photo: {varshit},
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    }
];

const teamMember = [
    {
        name: 'Aayush Raju Bade',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'b23mt1001@iitj.ac.in',
        insta: 'https://www.instagram.com/aayushrajubade/',
        linkedin: 'https://www.linkedin.com/in/aayush-raju-bade-b268b2280/',
        github: 'https://github.com/AayushBade14'
    },
    {
        name: 'Nayan Kute',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Vandita Gupta',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Aditya Jha',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Danie George John',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Divyansh Maheshwari',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Yuvraj Kumar',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Prakhar Goyal',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Iha Goyal',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    
]

const Team = () => {
        return (
            <div>
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#FB8569] dark:text-white text-center">
                    Mentors
                </h2>
                <div className="container">
                    {Mentor.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        quote = {member.quote}
                        photo={member.photo}
                        gmail = {member.gmail}
                        insta = {member.insta}
                        linkedin= {member.linkedin}
                        github = {member.github}
                    />
                    ))}
                </div>
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#FB8569] dark:text-white text-center">
                    Our Team
                </h2>
                <div className="container">
                    {teamMember.map((member, index) => (
                    <TeamMember
                    key={index}
                    name={member.name}
                    quote = {member.quote}
                    photo={member.photo}
                    gmail = {member.gmail}
                    insta = {member.insta}
                    linkedin= {member.linkedin}
                    github = {member.github}
                    />
                    ))}
                </div>
            </div>
          
        );
      };

export default Team;