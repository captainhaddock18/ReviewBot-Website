import React from 'react';

const ProgressBar = ({ progress, color }) => (
  <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
    <div
      className={`absolute top-0 left-0 h-full ${color} rounded-full`}
      style={{ width: `${progress}%` }}
    >
      <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
        {progress}%
      </span>
    </div>
  </div>
);

export default ProgressBar;
