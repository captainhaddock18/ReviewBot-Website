import React from 'react';


const teamMembers = [
  { name: 'Vandita', photo: 'https://via.placeholder.com/150', goldProgress: 70, elixirProgress: 60 },
  { name: 'Divyansh', photo: 'https://via.placeholder.com/150', goldProgress: 50, elixirProgress: 45 },
  { name: 'Danie', photo: 'https://via.placeholder.com/150', goldProgress: 85, elixirProgress: 75 },
  { name: 'Iha', photo: 'https://via.placeholder.com/150', goldProgress: 40, elixirProgress: 55 },
  { name: 'Ayush', photo: 'https://via.placeholder.com/150', goldProgress: 60, elixirProgress: 70 },
  { name: 'Aditya', photo: 'https://via.placeholder.com/150', goldProgress: 75, elixirProgress: 65 },
  { name: 'Nayan', photo: 'https://via.placeholder.com/150', goldProgress: 80, elixirProgress: 85 },
  { name: 'Yuvraj', photo: 'https://via.placeholder.com/150', goldProgress: 55, elixirProgress: 60 },
  { name: 'Prakhar', photo: 'https://via.placeholder.com/150', goldProgress: 90, elixirProgress: 80 },
];
import ProgressBar from './PerformanceBar'; // Adjust the path as needed
import './App.css';

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