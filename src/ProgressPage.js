import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress, duration = 20 }) => (
  <div className="relative w-full max-w-[800px]">
    <div className="relative rounded-full border-2 border-red-500 overflow-hidden">
      <div
        className="flex items-center justify-center rounded-full bg-red-400 text-white"
        style={{
          width: `${progress}%`,
          height: '85%',
          fontSize: '16px',
          lineHeight: '1.5',
        }}
      >
        <span className="p-1">{progress}%</span>
        <motion.div
          className="absolute top-0 left-0 h-full bg-[linear-gradient(45deg,rgb(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgb(255,255,255,0.2)_50%,rgb(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:50px_50px]"
          style={{
            width: `${progress}%`,
          }}
          animate={{ backgroundPosition: ['0% 0%', `${progress}% 100%`] }}
          transition={{ duration, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
        />
      </div>
    </div>
  </div>
);

export default function ProgressPage() {
  return (
    <section className=" dark:bg-gray-900 flex justify-center items-center">
      {/* Include ProgressBar here */}
      <div className="w-full max-w-screen-xl px-4 py-10 mx-auto">
        <ProgressBar progress={70} duration={15} /> {/* Example values for progress and duration */}
      </div>
    </section>
  );
}
