import React from "react";
import NavBar from "@/components/LandingPage/NavBar";
import JobInfoCard from "@/components/JobinfoPage/JobInfoCard";
import Companycard from "@/components/JobinfoPage/Companycard";
import Jobcard from "@/components/Jobcard";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useNavigate,useParams } from "react-router-dom";

// const job = {
//   companyLogo: "/company-icons/airbnb-logo.svg",
//   companyName: "Google",
//   location: "Hyderabad",
//   role: "Senior Product Designer",
//   description:
//     "Design, develop, and maintain software applications. Write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions. Stay updated with industry trends and continuously improve skills.",
//   positions: "2",
//   jobtype: "Full-time",
//   salary: "10+ Lakhs",
//   experience: "2 Years",
//   company_type: "Foreign MNC",
//   nature: "WFO",
//   jobRequirements: `
//         <p><strong>Job Requirements</strong></p>
//         <ul>
//             <li>Bachelor's degree in Computer Science, Information Technology, or a related field.</li>
//             <li>3+ years of professional experience in software development.</li>
//             <li>Proficiency in JavaScript, React, and Node.js.</li>
//             <li>Strong problem-solving skills and the ability to think critically.</li>
//             <li>Experience with front-end technologies such as HTML, CSS, and JavaScript frameworks.</li>
//             <li>Familiarity with version control systems like Git.</li>
//             <li>Understanding of RESTful APIs and web services.</li>
//             <li>Knowledge of database systems such as MySQL, PostgreSQL, or MongoDB.</li>
//             <li>Excellent debugging and optimization skills.</li>
//             <li>Ability to write clean, maintainable, and efficient code.</li>
//             <li>Strong communication and collaboration skills.</li>
//             <li>Experience with Agile development methodologies.</li>
//             <li>Knowledge of cloud platforms such as AWS or Azure is a plus.</li>
//             <li>Familiarity with CI/CD pipelines and DevOps practices is a plus.</li>
//         </ul>
//     `,
//   jobdscrp: `
//         <p><strong>Role &amp; responsibilities</strong></p>
//         <ul>
//             <li>Develop and maintain web applications using JavaScript, React, and Node.js.</li>
//             <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
//             <li>Write clean, maintainable, and efficient code.</li>
//             <li>Participate in code reviews and provide constructive feedback to peers.</li>
//             <li>Troubleshoot and debug applications to ensure optimal performance.</li>
//             <li>Stay up-to-date with emerging technologies and industry trends.</li>
//             <li>Mentor junior developers and contribute to team knowledge sharing.</li>
//             <li>Assist in the design and architecture of new software solutions.</li>
//         </ul>
//         <p><strong>Preferred candidate profile</strong></p>
//         <ul>
//             <li>Experience in full-cycle software development.</li>
//             <li>Excellent problem-solving and analytical skills.</li>
//             <li>Strong communication and teamwork abilities.</li>
//             <li>Ability to work in a fast-paced and dynamic environment.</li>
//             <li>Experience with Agile development methodologies.</li>
//             <li>Knowledge of cloud platforms such as AWS or Azure.</li>
//             <li>Familiarity with CI/CD pipelines and DevOps practices.</li>
//         </ul>
//     `,
//   abtcmpny: `
//         <p>Google is a global technology leader focused on improving the ways people connect with information. Our mission is to organize the world's information and make it universally accessible and useful. We are committed to fostering an inclusive and diverse workplace where everyone can thrive.</p>
//     `,
//   n_emps: "10000+ Employees",
//   hq: "Sunnyvale,CA",
//   reviews: [
//     {
//       review: "Great place to work",
//       isgood: true,
//     },
//     {
//       review: "Needs better management",
//       isgood: false,
//     },
//     {
//       review: "Excellent benefits",
//       isgood: true,
//     },
//     {
//       review: "Long working hours",
//       isgood: false,
//     },
//     {
//       review: "Supportive team",
//       isgood: true,
//     },
//   ],
//   totalApplicants: 120,
//   benefits: [
//     { perk: "Cafeteria", icon: "/stock_icons/coffee-icon.svg" },
//     { perk: "WFO", icon: "stock_icons/home-icon.svg" },
//     { perk: "Transportation", icon: "stock_icons/car-icon.svg" },
//   ],
// };

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
      <main className="flex flex-col bg-purple-100">
        <div className="bg-white">
          <NavBar />
        </div>

        {/* Job Info Section */}
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 content-stretch mt-4">
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
          <div className="lg:max-w-60 xl:max-w-80 2xl:max-w-150 bg-white rounded shadow-lg">
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
              className="text-xs md:text-md text-purple-800 font-bold bg-white shadow-lg rounded p-2"
              onClick={() => navigate("/jobs")}
            >
              View more
            </button>
          </div>

          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 content-stretch">
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