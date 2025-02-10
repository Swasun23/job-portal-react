import React from "react";
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

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const [process_data, setProcessData] = React.useState([]);
  const [categories_data, setCategoriesData] = React.useState([]);
  const [jobs, setjobsData] = React.useState([]);

  useEffect(() => {
    fetch("/data/process.json")
      .then((response) => response.json())
      .then((data) => {
        setProcessData(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesData(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    fetch("/data/jobslp.json")
      .then((response) => response.json())
      .then((data) => {
        setjobsData(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <main className="min-h-screen overflow-hidden relative">
      <div className="flex flex-col justify-center">
        <div className="sticky top-0 z-50 shadow-lg">
          <NavBar />
        </div>

        <div className="relative flex flex-col mt-[5rem] lg:mt-[10rem] items-center">
          {/* Floating Icons */}
          <div className="absolute inset-0 -z-20">
            <img
              src="/company-icons/airbnb-logo.svg"
              className="absolute top-0 left-5 md:left-10 lg:left-20 w-5 md:w-10 animate-bounce"
              alt="Airbnb Logo"
            />
            <img
              src="/company-icons/google-logo.svg"
              className="absolute top-10 right-5 md:right-10 lg:right-20 w-5 md:w-10 animate-bounce"
              alt="Google Logo"
            />
            <img
              src="/company-icons/amazon-logo.svg"
              className="absolute bottom-4 left-5 md:left-10 lg:left-32 w-5 md:w-10 animate-bounce"
              alt="Amazon Logo"
            />
            <img
              src="/company-icons/figma-logo.svg"
              className="absolute bottom-0 right-5 md:right-10 lg:right-32 w-5 md:w-10 animate-bounce"
              alt="Figma Logo"
            />
          </div>
          <div className="text-xs bg-orange-200 text-orange-400 lg:text-md rounded-lg p-1 font-bold m-2">
            💼 No.1 Job Hunt website
          </div>

          <p className="text-4xl whitespace-pre-wrap pt-1 text-center md:text-5xl lg:text-6xl 2xl:text-8xl font-black leading-relaxed">
            Search, Apply & <br className="m-5" />
            <p className="text-4xl whitespace-pre-wrap pt-1 text-center md:text-5xl lg:text-6xl 2xl:text-8xl font-black leading-relaxed 2xl:mt-5">
              Get your <span className="text-purple-700 ">Dream Job</span>
            </p>
          </p>
          <p className="text-center text-gray-700 text-xs 2xl:mt-10 xl:text-lg">
            Start your hunt for the best career changing opportunities from here
            in your
            <br />
            <p className="text-center text-gray-700 text-xs 2xl:mt-3 xl:text-lg">
              selected areas conveniently and get hired quickly.
            </p>
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center items-center mt-10">
          <button
            className="text-xs md:text-md xl:text-lg bg-purple-700 hover:scale-97 transition-transform duration-200 text-white font-bold px-3 py-2 md:py-2 md:px-2 lg:px-4 rounded-xl 2xl:px-6 2xl:py-3"
            onClick={() => navigate("/jobs")}
          >
            Browse Jobs
          </button>

          <div className="flex justify-center pl-3">
            <button className="bg-purple-700 text-white font-bold px-2 py-2 md:py-2 md:px-2 lg:px-4 rounded-full md:ml-2 lg:ml-4 hover:scale-97 transition-transform duration-200 2xl:px-0">
              <img
                src={playicon}
                className="h-3 w-3 2xl:h-[2rem] 2xl:w-[2.75rem]"
                alt="play icon"
              />
            </button>
          </div>
          <span className="font-bold p-3">How it works?</span>
        </div>

        <div className="mt-10">
          <JobFlex />
        </div>

        <div className="flex flex-col mt-20 2xl:mt-[7rem]">
          <p className="whitespace-pre-wrap text-center">
            <span className="text-2xl whitespace-pre-wrap pt-1 text-center md:text-4xl xl:text-6xl font-black leading-relaxed">
              Get Hired in{" "}
              <span className="text-purple-700"> 4 Quick Easy Steps</span>
            </span>
            <br />
            <p className="text-center text-xs mt-5 xl:text-lg text-gray-700">
              The quickest most efficient way to get hired by the top firms
              working in your
              <br />
              <p className="mt-3">career interested areas.</p>
            </p>
          </p>
        </div>

        <div className="mt-10">
          <div className="md:my-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-stretch">
            {process_data.map((process, index) => (
              <div key={index} className={index % 2 === 0 ? "mt-10" : ""}>
                <ProcessCard
                  img={process.img}
                  title={process.title}
                  description={process.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[5.5rem]">
          <p className="text-2xl whitespace-pre-wrap mt-10 text-center md:text-4xl xl:text-6xl font-black leading-relaxed">
            <span className="text-purple-700">Countless Career Options</span>{" "}
            Are Waiting
            <br />
            <p className="2xl:mt-[1.5rem] 2xl:mb-[3.5rem]">
              For You to Explore
            </p>
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
          <button className="my-10 2xl:my-[3.5rem] bg-purple-700 hover:scale-97 transition-transform duration-200 text-white font-semibold py-2 px-4 rounded-md">
            View All Categories
          </button>
        </div>

        <div className="mx-10">
          <div className="2xl:mx-[9.5rem]">
            <p className="text-2xl whitespace-pre-wrap mt-[3.5rem] md:text-4xl xl:text-6xl font-black leading-relaxed 2xl:mb-3">
              <span className="text-purple-700">Latest and Top</span> Job
              Openings
              <br />
            </p>
            <p className="text-start text-xs mt-5 xl:text-lg text-gray-700">
              Discover the latest job openings from the giant firms which you
              might want to apply
            </p>
            <p className="text-start text-xs xl:text-lg text-gray-700 mt-3">
              and take a chance to get hired by the top fortune companies
            </p>
          </div>

          <div className="mt-10 2xl:mb-20">
            <div className="flex flex-col">
              <button
                className="text-purple-700 font-bold text-end mb-5 xl:mr-10 2xl:mr-[30rem]"
                onClick={() => navigate("/jobs")}
              >
                View more
              </button>

              <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 content-stretch">
                {jobs.map((job) => (
                  <Jobcard
                    key={job.id}
                    id={job.id}
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
        </div>
        <div className="mx-10">
          <div className="mt-10">
            <div className="flex flex-col justify-start">
              <div className="2xl:mx-[9.5rem]">
                <div>
                  <p className="text-2xl whitespace-pre-wrap mt-10 md:text-4xl xl:text-6xl font-black leading-relaxed 2xl:mb-5">
                    What We Offer
                  </p>
                </div>

                <div>
                  <p className="text-start text-xs mt-5 xl:text-lg leading-relaxed text-gray-700 2xl:mb-2">
                    Job Portal is the right platform for you to get various job
                    recommendations, get career
                  </p>
                  <p className="text-start text-xs xl:text-lg leading-relaxed text-gray-700 mb-5">
                    counselling and find your ideal job profile.
                  </p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-5 justify-items-center gap-1 space-x-2 lg:space-x-5 items-center y-space-2">
                  {[
                    {
                      id: "01",
                      title: "Job Recommendation",
                      imgSrc:
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                      id: "02",
                      title: "Create & Build Portfolio",
                      imgSrc:
                        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                      id: "03",
                      title: "Career Consultation",
                      imgSrc:
                        "https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnNlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                    },
                  ].map((service) => (
                    <div
                      key={service.id}
                      className="flex flex-col justify-start"
                    >
                      <img
                        src={service.imgSrc}
                        alt={service.title}
                        className="h-35 md:h-25 lg:h-55 xl:h-75 2xl:w-95 rounded-xl"
                      />
                      <div className="flex flex-row mt-4">
                        <h2 className="font-bold text-2xl md:text-xl lg:text-2xl xl:text-3xl pr-3 text-transparent stroke-text">
                          {service.id}
                        </h2>
                        <div className="font-bold border-l-purple-700 border-l-4 pl-3 text-xl md:text-lg lg:text-xl xl:text-2xl">
                          {service.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 2xl:mt-[4.5rem]">
          <div className="flex flex-col items-center">
            <div className="text-2xl whitespace-pre-wrap mt-10 md:text-4xl xl:text-6xl font-black leading-relaxed">
              Testimonials
            </div>
            <div>
              <p className="text-center text-xs mt-5 xl:text-lg leading-15 text-gray-700">
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

        <div className="relative bg-gray-800 mt-10 w-11/12 md:w-3/4 lg:w-1/2 mx-auto items-center rounded-xl overflow-hidden 2xl:mt-[3.5rem]">
          <div className="flex flex-col justify-start p-6 md:p-10 lg:p-16 xl:p-20 text-center">
            <h1 className="font-extrabold text-xl md:text-3xl text-white text-start">
              Get Latest Job Updates
            </h1>

            <p className="text-white text-xs md:text-md mt-3 md:mt-5 text-start">
              Subscribe to get the latest updates
            </p>

            <div className="mt-6 md:mt-10 self-start">
              <div className="flex items-center bg-gray-800 border border-white rounded-lg p-2 w-full shadow-md">
                <Mail className="text-white ml-3 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 outline-none text-white placeholder-gray-400 bg-transparent text-xs md:text-md"
                />
                <button className="bg-white text-purple-700 px-1 py-2 md:px-4 md:py-2 rounded-lg font-semibold hover:scale-95 transition text-xs md:text-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Floating Image */}
          <img
            src="/landingPagepics/LandinpageGirl.png" // Replace with your image URL
            alt="Subscribe Illustration"
            className="absolute bottom-0 right-0 w-24 md:w-32 lg:w-40 2xl:w-[29rem] transform translate-y-1/4"
          />
        </div>

        <div className="w-full bg-gray-100 mt-2">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
