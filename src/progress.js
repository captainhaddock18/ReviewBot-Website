import logo from "./assets/logo.png"
import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from "./ProgressPage";

export default function Progress () {
    return(
        <section class="bg-[#001D21] dark:bg-gray-900 justify-center items-center pl-24 pr-0">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#FB8569]">Progress of CHAD</h1>
            <div className="w-full">
                <ProgressBar progress={75} />
            </div>
            <p class="max-w-2xl mb-6 font-medium text-[#FB8569] lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">You can track the prgress of CHAD by clicking the link below</p>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-xl font-bold text-center text-[#9B99FF] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-gray-800 shadow-lg transform transition-transform duration-300 hover:scale-105">
    Full Progress Report
    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
    </svg>
  </a>
            
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
  <img src={logo} alt="mockup" className="w-123 h-72" />  
</div>               
    </div>
</section>
    )
}