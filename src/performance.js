import React from 'react';
import ProgressBar from './ProgressBar';

const teamMembers = [
  { name: 'Vandita', photo: 'https://media.licdn.com/dms/image/D5603AQEdWn8wbAk-Kg/profile-displayphoto-shrink_400_400/0/1719067482355?e=1727308800&v=beta&t=w3JOntDGG-6HbkasJNfFeB7CavzlgERA4SObtCm4Boo', goldProgress: 70, elixirProgress: 60 },
  { name: 'Divyansh', photo: 'https://media.licdn.com/dms/image/D5603AQGJXzzuluJmyw/profile-displayphoto-shrink_400_400/0/1721583871266?e=1727308800&v=beta&t=PHg5CWEa_lwM2jJL-93wmslSc_Pzac_EirwCQSmeEaM', goldProgress: 50, elixirProgress: 45 },
  { name: 'Danie', photo: 'https://media.licdn.com/dms/image/D4E03AQFy8Xjo38qvmw/profile-displayphoto-shrink_400_400/0/1688220788738?e=1727308800&v=beta&t=VgmkV11XKL_ijQKE8jl5eFAq12lJ56JJXEELmowI8m8', goldProgress: 85, elixirProgress: 75 },
  { name: 'Iha', photo: 'https://media.licdn.com/dms/image/D5603AQE1hObgBx9SMQ/profile-displayphoto-shrink_400_400/0/1694672999399?e=1727308800&v=beta&t=jGuuj-FFJ6TL8UxI5OHur_MPCiZXV0onngVzxP9vaVY', goldProgress: 40, elixirProgress: 55 },
  { name: 'Aayush Raju Bade', photo: 'https://media.licdn.com/dms/image/D4D03AQHYGI7N7jaeEg/profile-displayphoto-shrink_400_400/0/1719024727767?e=1727308800&v=beta&t=tL7P_zzalPuDIWcHc4Zpc9eAxPDDsxPf2bgLrqmTtZg', goldProgress: 60, elixirProgress: 70 },
  { name: 'Aditya', photo: 'https://media.licdn.com/dms/image/D5603AQGFfzX5eC4rtA/profile-displayphoto-shrink_400_400/0/1705864325934?e=1727308800&v=beta&t=COvxVGA_YKEegdxGaRsE-tsqg4jX94jcNDPKhAQ_3LA', goldProgress: 75, elixirProgress: 65 },
  { name: 'Nayan', photo: 'https://media.licdn.com/dms/image/D5603AQGB8LfZOzd4eA/profile-displayphoto-shrink_800_800/0/1721495396434?e=1727308800&v=beta&t=-PR-reCN-Vyqw-ABp7p_fOfb8exXY8ZwlQsIPv62LTY', goldProgress: 80, elixirProgress: 85 },
  { name: 'Yuvraj', photo: 'https://media.licdn.com/dms/image/D4D03AQHuFGJ8fyKFkQ/profile-displayphoto-shrink_400_400/0/1687198633319?e=1727308800&v=beta&t=FzGtm8QtXKIrfRSAQAjrD0KuUM04jxOvcvdpR2hXIcY', goldProgress: 55, elixirProgress: 60 },
  { name: 'Prakhar', photo: 'https://media.licdn.com/dms/image/D5603AQH9drmsWtyXmw/profile-displayphoto-shrink_400_400/0/1716194326966?e=1727308800&v=beta&t=xjzLGji9aLEyuWkzzr73W4DmYh6H5qKsVvEcboOOn-s', goldProgress: 90, elixirProgress: 80 },
];

export default function Performance() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Team Performance</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Track the performance of each team member here.
        </p>
      </header>
      <main className="flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {member.name}
                </h2>
                <div className="w-full mb-4">
                  <h3 className="text-md font-medium text-gray-800 dark:text-gray-200">Gold Progress</h3>
                  <ProgressBar progress={member.goldProgress} color="bg-yellow-500" />
                </div>
                <div className="w-full">
                  <h3 className="text-md font-medium text-gray-800 dark:text-gray-200">Elixir Progress</h3>
                  <ProgressBar progress={member.elixirProgress} color="bg-purple-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}