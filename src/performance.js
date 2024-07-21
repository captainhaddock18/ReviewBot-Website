import React from 'react';
import ProgressBar from './ProgressBar';

const teamMembers = [
  { name: 'Vandita', photo: 'https://via.placeholder.com/150', goldProgress: 70, elixirProgress: 60, backText: 'Vandita is a key player in our team.'  },
  { name: 'Divyansh', photo: 'https://via.placeholder.com/150', goldProgress: 50, elixirProgress: 45, backText: 'Vandita is a key player in our team.'  },
  { name: 'Danie', photo: 'https://via.placeholder.com/150', goldProgress: 85, elixirProgress: 75, backText: 'Vandita is a key player in our team.'  },
  { name: 'Iha', photo: 'https://via.placeholder.com/150', goldProgress: 40, elixirProgress: 55, backText: 'Vandita is a key player in our team.'  },
  { name: 'Ayush', photo: 'https://via.placeholder.com/150', goldProgress: 60, elixirProgress: 70, backText: 'Vandita is a key player in our team.'  },
  { name: 'Aditya', photo: 'https://via.placeholder.com/150', goldProgress: 75, elixirProgress: 65, backText: 'Vandita is a key player in our team.'  },
  { name: 'Nayan', photo: 'https://via.placeholder.com/150', goldProgress: 80, elixirProgress: 85, backText: 'Vandita is a key player in our team.'  },
  { name: 'Yuvraj', photo: 'https://via.placeholder.com/150', goldProgress: 55, elixirProgress: 60, backText: 'Vandita is a key player in our team.'  },
  { name: 'Prakhar', photo: 'https://via.placeholder.com/150', goldProgress: 90, elixirProgress: 80, backText: 'Vandita is a key player in our team.'  },
];

export default function Performance() {
  return (
    <div className="min-h-screen bg-[#001D21] p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#FB8569]">Team Performance</h1>
        <p className="text-lg text-[#939185] mt-2">
          Track the performance of each team member here.
        </p>
      </header>
      <main className="flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flip-card h-64">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front flex flex-col items-center bg-white shadow-lg rounded-lg p-4 h-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full mb-4"
                    />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h2>
                    <div className="w-full mb-4">
                      <h3 className="text-md font-medium text-gray-800">Gold Progress</h3>
                      <ProgressBar progress={member.goldProgress} color="bg-yellow-500" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-md font-medium text-gray-800">Elixir Progress</h3>
                      <ProgressBar progress={member.elixirProgress} color="bg-purple-500" />
                    </div>
                  </div>
                  <div className="flip-card-back flex flex-col items-center justify-center bg-[#001D21] text-[#939185] shadow-lg rounded-lg p-4 h-full">
                    <p>{member.backText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}