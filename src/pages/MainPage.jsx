import NavBar from "@/components/LandingPage/NavBar";
import Filterdock from "@/components/MainPage/FIlterdock";
import { useState, useEffect } from "react";
import filterData from "../assets/data/filterdata.jsx";
import Jobcard from "@/components/Jobcard";
import Footer from "@/components/Footer.jsx";

const MainPage = () => {
  const [selectedItems, setSelectedItems] = useState(
    filterData.reduce((acc, filter) => {
      filter.items.forEach((item) => {
        acc[item.id] = false;
      });
      return acc;
    }, {})
  );
  const [jobs, setjobsData] = useState([]);
  useEffect(() => {
    fetch("/data/jobs.json") // If the file is in the `public/` folder
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setjobsData(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <main className="bg-purple-200">
      <div className="flex flex-col">
        <div className="bg-white">
          <NavBar />
        </div>
        <div className="relative lg:hidden mt-5 left-5"> {/* hidden filter option*/ }
            <button className="text-md text-white bg-purple-800 p-2 rounded">
                Filter
            </button>
        </div>
        <div className="flex flex-row mx-2 mt-2 mb-2">
          <div className="hidden lg:block w-1/3 2xl:w-1/4 mx-auto xl:justify-items-center 2xl:mx-0 2xl:justify-end">
            {" "}
            {/* For filterDock */}
            <Filterdock
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>

          <div className="w-full lg:w-2/3 mx-1">
            {" "}
            {/* For job listings */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 content-stretch 2xl:content-start 2xl:justify-start 2xl:mx-0">
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
        <div className="bg-white">
            <Footer />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
