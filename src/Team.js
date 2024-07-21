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
        photo: 'https://media.licdn.com/dms/image/D4D03AQEOEuwfFgyB9Q/profile-displayphoto-shrink_400_400/0/1698235123889?e=1727308800&v=beta&t=Ahws741NNVmQIrwQI1Kxo_0r4HewbD_PE7WEMUp9JuA',
        gmail: 'https://www.instagram.com/daniegeorgejohn?igsh=MTVjdmQ1OHdwMXBqZw==',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Varshit Manikanta',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D5603AQFoHwYpUu5Kog/profile-displayphoto-shrink_400_400/0/1709545493435?e=1727308800&v=beta&t=yXT6A4-iy-XIFISPtkJrufKG3ndqs_w_VjbT3uX2QNU',
        gmail: 'link',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    }
];

const teamMember = [
    {
        name: 'Aayush Bade',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D4D03AQHYGI7N7jaeEg/profile-displayphoto-shrink_400_400/0/1719024727767?e=1727308800&v=beta&t=tL7P_zzalPuDIWcHc4Zpc9eAxPDDsxPf2bgLrqmTtZg',
        gmail: 'mailto:b23mt1001@iitj.ac.in',
        insta: 'https://www.instagram.com/aayushrajubade?igsh=MXdvYThmOXI0ZW5zdw==',
        linkedin: 'https://www.linkedin.com/in/aayush-raju-bade-b268b2280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/'
    },
    {
        name: 'Aditya Jha',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D5603AQGFfzX5eC4rtA/profile-displayphoto-shrink_400_400/0/1705864325934?e=1727308800&v=beta&t=COvxVGA_YKEegdxGaRsE-tsqg4jX94jcNDPKhAQ_3LA',
        gmail: 'mailto:b23mt1007@iitj.ac.in',
        insta: 'https://www.instagram.com/aditya_jha_4726?igsh=MXNqb2k4Ym8zaWE1ag==',
        linkedin: 'https://www.linkedin.com/in/adityajha-ad468?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/'
    },
    {
        name: 'Danie George John',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D4E03AQFy8Xjo38qvmw/profile-displayphoto-shrink_400_400/0/1688220788738?e=1727308800&v=beta&t=VgmkV11XKL_ijQKE8jl5eFAq12lJ56JJXEELmowI8m8',
        gmail: 'mailto:b23ci1012@iitj.ac.in',
        insta: 'https://www.instagram.com/daniegeorgejohn?igsh=MTVjdmQ1OHdwMXBqZw==',
        linkedin: 'https://www.linkedin.com/in/daniegeorgejohn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/DarkPhoenix616'
    },
    {
        name: 'Divyansh Maheshwari',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D5603AQGJXzzuluJmyw/profile-displayphoto-shrink_400_400/0/1721583871266?e=1727308800&v=beta&t=PHg5CWEa_lwM2jJL-93wmslSc_Pzac_EirwCQSmeEaM',
        gmail: 'mailto:b23cm1015@iitj.ac.in',
        insta: 'link',
        linkedin: 'link',
        github: 'link'
    },
    {
        name: 'Iha Goyal',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D4D03AQHYGI7N7jaeEg/profile-displayphoto-shrink_400_400/0/1719024727767?e=1727308800&v=beta&t=tL7P_zzalPuDIWcHc4Zpc9eAxPDDsxPf2bgLrqmTtZg',
        gmail: 'mailto:b23bb1020@iitj.ac.in',
        insta: 'https://www.instagram.com/hazystuf?igsh=MWhheXB6Ym55NWdyZQ==',
        linkedin: 'https://www.linkedin.com/in/iha-goyal-b35452291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/ihagoyal21'
    },
    {
        name: 'Nayan Kute',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D5603AQGB8LfZOzd4eA/profile-displayphoto-shrink_800_800/0/1721495396434?e=1727308800&v=beta&t=-PR-reCN-Vyqw-ABp7p_fOfb8exXY8ZwlQsIPv62LTY',
        gmail: 'mailto:b23cs1041@iitj.ac.in',
        insta: 'https://www.instagram.com/nayankute21?igsh=MWQxNWp4YzRneTlmOA==',
        linkedin: 'https://www.linkedin.com/in/nayan-kute-a1b998284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/nayan-Kute21'
    },
    {
        name: 'Prakhar Goyal',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D5603AQH9drmsWtyXmw/profile-displayphoto-shrink_400_400/0/1716194326966?e=1727308800&v=beta&t=xjzLGji9aLEyuWkzzr73W4DmYh6H5qKsVvEcboOOn-s',
        gmail: 'mailto:b23me1049@iitj.ac.in',
        insta: 'https://www.instagram.com/prakhar_goyal28_10?igsh=d3c4ZXdnMGQ4aHM4',
        linkedin: 'https://www.linkedin.com/in/prakhar-goyal-a90454190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/PrakharGoyal28'
    },
    {
        name: 'Vandita Gupta',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D5603AQEdWn8wbAk-Kg/profile-displayphoto-shrink_400_400/0/1719067482355?e=1727308800&v=beta&t=w3JOntDGG-6HbkasJNfFeB7CavzlgERA4SObtCm4Boo',
        gmail: 'mailto:b23cy1022@iitj.ac.in',
        insta: 'https://www.instagram.com/vanditag_09?igsh=MXY5M2E3ODQxMDk0ZQ==',
        linkedin: 'https://www.linkedin.com/in/vandita-gupta-0b075828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/Vandita1022'
    },
    {
        name: 'Yuvraj Kumar',
        quote: 'Quote',
        photo: 'https://media.licdn.com/dms/image/D4D03AQHuFGJ8fyKFkQ/profile-displayphoto-shrink_400_400/0/1687198633319?e=1727308800&v=beta&t=FzGtm8QtXKIrfRSAQAjrD0KuUM04jxOvcvdpR2hXIcY',
        gmail: 'mailto:b23ci1049@iitj.ac.in',
        insta: 'https://www.instagram.com/.yuvrajkumar.?igsh=cGdzaXFvZGhhNDc1',
        linkedin: 'https://www.linkedin.com/in/yuvraj-kumar-373136280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'yuvrajk110905'
    }
];

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