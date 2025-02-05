import React from 'react';

const JobFlex = () => {
  const jobs = [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Data Scientist",
    "DevOps Engineer",
    "Cloud Architect",
    "Security Analyst",
    "Network Engineer",
  ];

  return (
    <div className="w-full mt-5 overflow-hidden">
      {/* First row - Left to Right */}
      <div className="relative w-full h-16 md:h-20 mb-4 overflow-hidden">
        <div 
          className="absolute flex animate-scroll-left"
          style={{
            willChange: 'transform'
          }}
        >
          {[...jobs, ...jobs, ...jobs].map((job, index) => (
            <button
              key={`job1-${index}`}
              className="flex items-center justify-center min-w-[120px] md:min-w-[200px] mx-2 md:mx-4 px-4 md:px-6 h-10 md:h-12 
                text-sm md:text-base text-black border border-gray-300 rounded-full hover:text-purple-800 
                hover:border-purple-800 transition-colors duration-200 whitespace-nowrap"
            >
              {job}
            </button>
          ))}
        </div>
      </div>

      {/* Second row - Right to Left */}
      <div className="relative w-full h-16 md:h-20 overflow-hidden">
        <div 
          className="absolute flex animate-scroll-right"
          style={{
            willChange: 'transform'
          }}
        >
          {[...jobs, ...jobs, ...jobs].map((job, index) => (
            <button
              key={`job2-${index}`}
              className="flex items-center justify-center min-w-[120px] md:min-w-[200px] mx-2 md:mx-4 px-4 md:px-6 h-10 md:h-12 
                text-sm md:text-base text-black border border-gray-300 rounded-full hover:text-purple-800 
                hover:border-purple-800 transition-colors duration-200 whitespace-nowrap"
            >
              {job}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobFlex;