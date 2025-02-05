import React from "react";
import Brandlogo from "@/components/LandingPage/Brandlogo";
import NavBar from "@/components/LandingPage/NavBar";
import playicon from "/stock_icons/play-icon.svg";
import JobFlex from "@/components/LandingPage/JobFlex";
import { useEffect } from "react";
import ProcessCard from "@/components/LandingPage/ProcessCard";
import CategoryCard from "@/components/LandingPage/CategoryCard";
import Jobcard from "@/components/Jobcard";
import TestimonialCarousel from "@/components/LandingPage/Testimonialcarousal";
import { Mail } from "lucide-react";
import Footer from "@/components/Footer";
const LandingPage = () => {
  const [process_data, setProcessData] = React.useState([]);
  const [categories_data, setCategoriesData] = React.useState([]);
  const [jobs, setjobsData] = React.useState([]);

  useEffect(() => {
    fetch("/data/process.json") // If the file is in the `public/` folder
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setProcessData(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    fetch("/data/categories.json") // If the file is in the `public/` folder
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setCategoriesData(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    fetch("/data/jobslp.json") // If the file is in the `public/` folder
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setjobsData(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <main className="px-10 overflow-hidden relative">
      {/* <img
        className="absolute top-40 right-100 h-10 animate-bounce"
        style={{ zIndex: 10 }}
        src="/company-icons/amazon-logo.svg"
      />
      <img
        className="absolute h-10 top-40 left-40 animate-bounce"
        style={{ zIndex: 10 }}
        src="/company-icons/google-logo.svg"
      />
      <img
        className="absolute h-10 top-100 left-80 animate-bounce"
        style={{ zIndex: 10 }}
        src="/company-icons/figma-logo.svg"
      />
      <img
        className="absolute h-10 top-100 right-30 animate-bounce"
        style={{ zIndex: 10 }}
        src="/company-icons/spotify-logo.svg"
      /> */}
      <div className="flex flex-col justify-center">
        <NavBar />
        <div className="flex flex-col mt-30 lg:mt-40 2xl:mt-60 items-center">
          <div className="text-sm bg-orange-200 text-orange-400 lg:text-md rounded-lg">
            💼 No.1 Job Hunt website
          </div>

          <p className="text-4xl whitespace-pre-wrap pt-1 text-center md:text-6xl lg:text-8xl font-black leading-relaxed">
            Search, Apply & <br className="m-5" />
            Get your <span className="text-purple-800 ">Dream Job</span>
          </p>
          <p className="text-center text-xs mt-5 xl:text-lg">
            Start your hunt for the best career changing opportunities from here
            in your
            <br />
            selected areas conveniently and get hired quickly.
          </p>
          <div className="flex flex-row justify-center items-center mt-5">
            <button className="text-xs md:text-lg bg-purple-800 hover:scale-97 transition-transform duration-200 text-white font-bold px-3 py-2 md:py-4 md:px-8 lg:px-10  rounded-xl">
              Browse Jobs
            </button>
            <div className="flex justify-center pl-3">
              <button className="bg-purple-800 text-white font-bold px-1 py-1 md:py-2 md:px-2 lg:px-4 rounded-full md:ml-2 lg:ml-4 hover:scale-97 transition-transform duration-200">
                <img
                  src={playicon}
                  className="h-4 w-4 2xl:h-6"
                  alt="play icon"
                />
              </button>
              <span className="font-bold p-3">How it works?</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <JobFlex />
        </div>
        <div className="flex flex-col mt-10">
          <p className="whitespace-pre-wrap text-center">
            <span className="text-2xl whitespace-pre-wrap pt-1 text-center md:text-4xl xl:text-6xl font-black leading-relaxed">
              Get Hired in{" "}
              <span className="text-purple-800"> 4 Quick Easy Steps</span>
            </span>
            <br />
            <span className="text-center text-xs mt-5 xl:text-lg">
              The quickest most efficient way to get hired by the top firms
              working in your
              <br />
              career interested areas.
            </span>
          </p>
        </div>
        <div className="mt-10">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-stretch">
            {process_data.map((process, index) => (
              <ProcessCard
                key={index}
                img={process.img}
                title={process.title}
                description={process.description}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-2xl whitespace-pre-wrap mt-10 text-center md:text-4xl xl:text-6xl font-black leading-relaxed">
            <span className="text-purple-800">Countless Career Options</span>{" "}
            Are Waiting
            <br />
            For You to Explore
          </p>
        </div>
        <div className="mt-10">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 content-stretch">
            {categories_data.map((category, index) => (
              <CategoryCard
                key={index}
                img={category.img}
                title={category.title}
                description={category.description}
                hoverEnabled={true}
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="my-10 bg-purple-800 hover:scale-97 transition-transform duration-200 text-white font-semibold py-2 px-4 rounded-xl">
            View All Categories
          </button>
        </div>
        <div>
          <p className="text-2xl whitespace-pre-wrap mt-10 md:text-4xl xl:text-6xl font-black leading-relaxed">
            <span className="text-purple-800">Latest and Top</span> Job Openings
            <br />
          </p>
          <span className="text-center text-xs mt-5 xl:text-lg">
            Discover the latest job openings from the giant firms which you
            might want to apply
            <br />
            and take a chance to get hired by the top fortune companies
          </span>
        </div>
        <div className="mt-10">
          <div className="flex flex-col">
            <button className="text-purple-800 font-bold text-end mb-5 xl:mr-10">
              View more
            </button>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 content-stretch">
              {jobs.map((job, index) => (
                <Jobcard
                  key={index}
                  companylogo={job.companyLogo}
                  companyName={job.companyName}
                  location={job.location}
                  role={job.role}
                  description={job.description}
                  positions={job.positions}
                  jobtype={job.jobtype}
                  salary={job.salary}
                  experience={job.experience}
                  nature={job.nature}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col justify-start">
            <div>
              <p className="text-2xl whitespace-pre-wrap mt-10 md:text-4xl xl:text-6xl font-black leading-relaxed">
                What We Offer
              </p>
            </div>
            <div>
              <span className="text-center text-xs mt-5 xl:text-lg leading-relaxed">
                Job Portal is the right platform for you to get various job
                recommendations, get career
                <br />
                counselling and find your ideal job profile.
              </span>
            </div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 justify-items-start gap-1 space-x-5">
                <div className="flex flex-col justify-start">
                  <img
                    src="landingPagepics/consultation.jpg"
                    alt="job recommendation"
                    className="h-35 lg:h-55 xl:h-75 rounded-xl"
                  />
                  <div className="flex flex-row mt-4">
                    <h2 className="font-bold text-2xl xl:text-3xl pr-3 text-transparent stroke-text">
                      01
                    </h2>
                    <div className="font-bold border-l-purple-800 border-l-4 pl-3 text-xl xl:text-2xl">
                      {" "}
                      Job Recommendation
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <img
                    src="landingPagepics/profile-building.jpg"
                    alt="job recommendation"
                    className="h-35 lg:h-55 xl:h-75 rounded-xl"
                  />
                  <div className="flex flex-row mt-4">
                    <h2 className="font-bold text-2xl xl:text-3xl pr-3 text-transparent stroke-text">
                      02
                    </h2>
                    <div className="font-bold border-l-purple-800 border-l-4 pl-3 text-xl xl:text-2xl">
                      {" "}
                      Create & Build Portfolio
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <img
                    src="landingPagepics/job-recommendation.jpg"
                    alt="job recommendation"
                    className="h-35 lg:h-55 xl:h-75 rounded-xl"
                  />
                  <div className="flex flex-row mt-4">
                    <h2 className="font-bold text-2xl xl:text-3xl pr-3 text-transparent stroke-text">
                      03
                    </h2>
                    <div className="font-bold border-l-purple-800 border-l-4 pl-3 text-xl xl:text-2xl">
                      {" "}
                      Career Consultation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <div className="text-2xl whitespace-pre-wrap mt-10 md:text-4xl xl:text-6xl font-black leading-relaxed">
              Testimonials
            </div>
            <div>
              <p className="text-center text-xs mt-5 xl:text-lg leading-relaxed">
                Now, let's hear from our happy customers who have successfully{" "}
                <br />
                found their dream job
              </p>
            </div>
            <div className="mt-10">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 mt-10 w-11/12 md:w-3/4 lg:w-1/2 mx-auto items-center rounded-xl">
          <div className="flex flex-col justify-center p-6 md:p-10 lg:p-16 xl:p-20 text-center">
            {/* Heading */}
            <h1 className="font-extrabold text-xl md:text-3xl text-white">
              Get Latest Job Updates
            </h1>

            {/* Subtext */}
            <p className="text-white text-xs md:text-md mt-3 md:mt-5">
              Subscribe to get the latest updates
            </p>

            {/* Subscription Input */}
            <div className="mt-6 md:mt-10">
              <div className="flex items-center bg-gray-800 border border-white rounded-lg p-2 w-full max-w-md mx-auto shadow-md">
                {/* Mail Icon */}
                <Mail className="text-white ml-3 h-5 w-5" />

                {/* Input Field */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 outline-none text-white placeholder-gray-400 bg-transparent text-xs md:text-md"
                />

                {/* Subscribe Button */}
                <button className="bg-white text-purple-800 px-1 py-2 md:px-4 md:py-2 rounded-lg font-semibold hover:scale-95 transition text-xs md:text-md ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
