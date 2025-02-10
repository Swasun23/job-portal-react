import React from "react";
import NavBar from "@/components/LandingPage/NavBar";
import JobInfoCard from "@/components/JobinfoPage/JobInfoCard";
import Companycard from "@/components/JobinfoPage/Companycard";
import Jobcard from "@/components/Jobcard";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useNavigate,useParams } from "react-router-dom";

const JobinfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Job ID:", id); // Debugging

  const [jobs, setJobsData] = useState([]);
  const [job, setJobData] = useState(null);

  // Fetch all jobs for recommendations
  useEffect(() => {
    fetch("/data/jobsInfopage.json")
      .then((response) => response.json())
      .then((data) => setJobsData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // Fetch single job based on ID
  useEffect(() => {
    fetch("/data/gptgenjobs.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging
        const foundJob = data.find((job) => String(job.id) === String(id));
        if (foundJob) {
          setJobData(foundJob);
        } else {
          console.warn(`No job found with ID: ${id}`);
        }
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id]);

  // Show loading state if job data is not available
  if (!job) return <p className="text-center text-xl font-semibold">Loading job details...</p>;

  return (
    <>
      <main className="flex flex-col bg-white">
        <div className="bg-white">
          <NavBar />
        </div>

        {/* Job Info Section */}
        <div className="container lg:max-w-100 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 content-stretch mt-4 shadow-lg lg-space-x-2">
          <div className="shadow-lg ">
          <JobInfoCard
            companylogo={job.companyLogo}
            role={job.role}
            positions={job.positions}
            jobtype={job.jobtype}
            salary={job.salary}
            experience={job.experience}
            nature={job.nature}
            jobdscrp={job.jobdscrp}
            jobreq={job.jobRequirements}
          />
          </div>
          
          <div className="lg:max-w-100 xl:max-w-[46rem] 2xl:max-w-150 bg-white rounded">
            <Companycard
              abtcmpny={job.abtcmpny}
              n_emps={job.n_emps}
              hq={job.hq}
              reviews={job.reviews}
              benefits={job.benefits}
            />
          </div>
        </div>

        {/* Job Recommendations */}
        <div className="flex flex-col my-2">
          <div className="flex flex-row justify-between mx-2 lg:mx-20 xl:mx-35 mt-2 mb-2 2xl:mx-[32rem]">
            <h1 className="text-md md:text-lg lg:text-xl font-extrabold">
              Job recommendations for You
            </h1>
            <button
              className="text-xs md:text-md text-purple-700 font-bold bg-white shadow-lg rounded p-2"
              onClick={() => navigate("/jobs")}
            >
              View more
            </button>
          </div>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4 content-stretch">
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

        <div className="bg-white mt-5">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default JobinfoPage;