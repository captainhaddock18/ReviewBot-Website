
export default function Hero (){
    return(

        <div class="opacity-0 animate-fadeIn h-screen pt-30%" >
            <section class="bg-[#001D21] dark:bg-gray-900 mb-0">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-[#FB8569] bg-gray-800 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700" role="alert">
                        <span class="text-sm font-medium ml-5">Review-Bot is out Now!</span> 
                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#FB8569] md:text-5xl lg:text-6xl dark:text-white">ABOUT - CHAD</h1>
                    <h4 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-[#FB8569] md:text-2xl lg:text-3xl dark:text-white">We invest in the world’s potential</h4>
                    <p class="mb-8 text-lg font-normal text-[#FB8569] lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">ReviewBot is an AI powered tool that performs automated code reviews. It improves the code quality by identifying and suggesting fixes for potential issues. It cuts down on the amount of time and effort that is spent manually reviewing code. It also integrates seamlessly with existing development workflows and tools.</p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-xl font-bold text-center text-[#9B99FF] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-gray-800 shadow-lg transform transition-transform duration-300 hover:scale-105">
    Learn more
    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
    </svg>
  </a>
                    </div>
                </div>
            </section>
        </div>

    )
}