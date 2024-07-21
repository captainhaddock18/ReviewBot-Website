import React from 'react';
import ProgressBarWithNodes from './ProgressBarWithNodes';
import logo from './logo.svg'; 

function Progressapp() {
  return (
    <div className="ProgressApp">
      <header className="ProgressApp-header">
        <h1>PROGRESS-BAR</h1>
      </header>
      <hr />
      <ProgressBarWithNodes />
    </div>
  );
}

export default Progressapp;
