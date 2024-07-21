import React from 'react';
import ProgressBar from './ProgressBar'; // Adjust the path as needed
import './App.css';

export default function Performance() {
  const teamMembers = [
    { name: 'Vandita', photo: 'https://via.placeholder.com/150', score1: 70, score2: 60, backText: 'Vandita is a key player in our team.' },
    { name: 'Divyansh', photo: 'https://via.placeholder.com/150', score1: 50, score2: 45, backText: 'Divyansh is a key player in our team.' },
    { name: 'Danie', photo: 'https://via.placeholder.com/150', score1: 85, score2: 75, backText: 'Danie is a key player in our team.' },
    { name: 'Iha', photo: 'https://via.placeholder.com/150', score1: 40, score2: 55, backText: 'Iha is a key player in our team.' },
    { name: 'Ayush', photo: 'https://via.placeholder.com/150', score1: 60, score2: 70, backText: 'Ayush is a key player in our team.' },
    { name: 'Aditya', photo: 'https://via.placeholder.com/150', score1: 75, score2: 65, backText: 'Aditya is a key player in our team.' },
    { name: 'Nayan', photo: 'https://via.placeholder.com/150', score1: 80, score2: 85, backText: 'Nayan is a key player in our team.' },
    { name: 'Yuvraj', photo: 'https://via.placeholder.com/150', score1: 55, score2: 60, backText: 'Yuvraj is a key player in our team.' },
    { name: 'Prakhar', photo: 'https://via.placeholder.com/150', score1: 90, score2: 80, backText: 'Prakhar is a key player in our team.' },
  ];

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
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front flex flex-col items-center p-2">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-20 h-20 object-cover rounded-full mb-2"
                    />
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h2>
                    <div className="w-full mb-1 flex flex-col space-y-1">
                      {/* Progress Bars */}
                      <ProgressBar 
                        label1={"Gold Progress"} 
                        score1={member.score1} 
                        label2={"Elixir Progress"} 
                        score2={member.score2} 
                      />
                    </div>
                  </div>
                  <div className="flip-card-back flex flex-col items-center justify-center bg-[#001D21] text-[#939185] p-2">
                    <p className="text-sm text-center">
                      {member.backText}
                    </p>
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