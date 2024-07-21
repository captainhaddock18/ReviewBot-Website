import React from "react";
import TeamMember from './TeamMember';
import Header from "./Header";
import tharak from "./assets/Screenshot 2024-07-02 135923.png";
import varshit from "./assets/varshita_mentor.jpeg";
import './TeamMember.css';

const Mentor = [
    {
        name: 'Tharakadatta Hegde',
        quote: 'Quote',
        photo: {tharak},
        gmail: 'mailto:b22es007@iitj.ac.in',
        insta: 'https://www.instagram.com/tharak_hegde?igsh=MWk1ZHFxNDJoZXM3',
        linkedin: 'https://www.linkedin.com/in/tharakadattahegde?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/'
    },
    {
        name: 'Varshit Manikanta',
        quote: 'Quote',
        photo: {varshit},
        gmail: 'b22ai038@iitj.ac.in',
        insta: 'https://www.instagram.com/varshit_manikanta?igsh=NHBuYXdkMXhjcm0w',
        linkedin: 'https://www.linkedin.com/in/varshit-manikanta-079b65255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/'
    }
    
];

const teamMember = [
    {
        name: 'Aayush Raju Bade',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23mt1001@iitj.ac.in',
        insta: 'https://www.instagram.com/aayushrajubade?igsh=MXdvYThmOXI0ZW5zdw==',
        linkedin: 'https://www.linkedin.com/in/aayush-raju-bade-b268b2280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/'
    },
    {
        name: 'Aditya Jha',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23mt1007@iitj.ac.in',
        insta: 'https://www.instagram.com/aditya_jha_4726?igsh=MXNqb2k4Ym8zaWE1ag==',
        linkedin: 'https://www.linkedin.com/in/adityajha-ad468?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/'
    },
    {
        name: 'Danie George John',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23ci1012@iitj.ac.in',
        insta: 'https://www.instagram.com/daniegeorgejohn?igsh=MTVjdmQ1OHdwMXBqZw==',
        linkedin: 'https://www.linkedin.com/in/daniegeorgejohn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/DarkPhoenix616'
    },
    {
        name: 'Divyansh Maheshwari',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23cm1015@iitj.ac.in',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Iha Goyal',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23bb1020@iitj.ac.in',
        insta: 'https://www.instagram.com/hazystuf?igsh=MWhheXB6Ym55NWdyZQ==',
        linkedin: 'https://www.linkedin.com/in/iha-goyal-b35452291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/ihagoyal21'
    },
    {
        name: 'Nayan Kute',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23cs1041@iitj.ac.in',
        insta: 'https://www.instagram.com/nayankute21?igsh=MWQxNWp4YzRneTlmOA==',
        linkedin: 'https://www.linkedin.com/in/nayan-kute-a1b998284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/nayan-Kute21'
    },
    {
        name: 'Prakhar Goyal',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23me1049@iitj.ac.in',
        insta: 'https://www.instagram.com/prakhar_goyal28_10?igsh=d3c4ZXdnMGQ4aHM4',
        linkedin: 'https://www.linkedin.com/in/prakhar-goyal-a90454190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/PrakharGoyal28'
    },
    {
        name: 'Vandita Gupta',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23cy1022@iitj.ac.in',
        insta: 'https://www.instagram.com/vanditag_09?igsh=MXY5M2E3ODQxMDk0ZQ==',
        linkedin: 'https://www.linkedin.com/in/vandita-gupta-0b075828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/Vandita1022'
    },
    {
        name: 'Yuvraj Kumar',
        quote: 'Quote',
        photo: 'pic',
        gmail: 'mailto:b23ci1049@iitj.ac.in',
        insta: 'https://www.instagram.com/.yuvrajkumar.?igsh=cGdzaXFvZGhhNDc1',
        linkedin: 'https://www.linkedin.com/in/yuvraj-kumar-373136280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'yuvrajk110905'
    }
];


const Team = () => {
        return (
            <div>
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