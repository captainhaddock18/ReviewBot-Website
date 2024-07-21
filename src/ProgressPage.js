import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress, duration = 20 }) => (
    <div className="relative mb-5 w-full max-w-[800px] mx-auto">
      <div className="relative rounded-full border-2 border-red-500 p-1 overflow-hidden">
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
              width: `${progress}%`, // Set the width to the progress value
            }}
            animate={{ backgroundPosition: ['0% 0%', `${progress}% 100%`] }} // Animate within the progress width
            transition={{ duration, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          />
        </div>
      </div>
    </div>
  );

export default function ProgressPage() {
  return (
    <section className="bg-[#EEEDEB] dark:bg-gray-900 flex justify-center items-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Progress of CHAD
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            You can track the progress of CHAD by clicking the link below
          </p>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-blue-700"
          >
            Full Progress report
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
      {/* Include ProgressBar here */}
      <div className="w-full max-w-screen-xl px-4 py-8 mx-auto">
        <ProgressBar progress={70} duration={15} /> {/* Example values for progress and duration */}
      </div>
    </section>
  );
}
