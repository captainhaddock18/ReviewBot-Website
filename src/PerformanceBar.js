import React from 'react';
import { ProgressBar as FancyProgressBar } from 'react-progressbar-fancy';

export default function ProgressBar({ label1, score1, label2, score2 }) {
  return (
    <div className="space">
     
      <FancyProgressBar
        label={label1}
        progressColor="red" // Fixed color for the first bar
        darkTheme
        score={score1}
      />
      
      <FancyProgressBar
        label={label2}
        progressColor="purple" // Fixed color for the second bar
        darkTheme
        score={score2}
      />
    </div>
  );
}
