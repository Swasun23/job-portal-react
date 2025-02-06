import { useState, useEffect } from "react";
import NavBar from "@/components/LandingPage/NavBar";
import Filterdock from "@/components/MainPage/FIlterdock";
import filterData from "../assets/data/filterdata.jsx";
import Jobcard from "@/components/Jobcard";
import Footer from "@/components/Footer.jsx";
import BottomDrawer from "@/components/MainPage/BottomDrawer.jsx";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Manage URL params

  // Initialize selectedItems from URL params
  const [selectedItems, setSelectedItems] = useState(() => {
    const params = Object.fromEntries(searchParams.entries());
    return filterData.reduce((acc, filter) => {
      filter.items.forEach((item) => {
        acc[item.id] = params[item.id] === "true"; // Convert string to boolean
      });
      return acc;
    }, {});
  });

  const [jobs, setJobsData] = useState([]); // All jobs
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10); // Default jobs per page

  // Update URL params when selectedItems change
  useEffect(() => {
    const newParams = Object.keys(selectedItems)
      .filter((key) => selectedItems[key]) // Only include selected filters
      .reduce((acc, key) => {
        acc[key] = "true"; // Store in URL as string
        return acc;
      }, {});

    setSearchParams(newParams); // Update URL
  }, [selectedItems, setSearchParams]);

  useEffect(() => {
    fetch("/data/gptgenjobs.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Selected Items:", JSON.stringify(selectedItems, null, 2));
        const filteredJobs = data.filter((job) =>
          Object.keys(selectedItems).every((filterKey) =>
            !selectedItems[filterKey] ? true : job.filterable.includes(filterKey)
          )
        );

        setJobsData(filteredJobs);
      })
      .catch((error) => console.error("Error fetching jobs data:", error));
  }, [selectedItems]);

  useEffect(() => {
    const updateJobsPerPage = () => {
      if (window.innerWidth >= 1536) setJobsPerPage(15); // 2XL
      else if (window.innerWidth >= 1024) setJobsPerPage(10); // LG
      else setJobsPerPage(8); // Mobile & smaller screens
    };

    updateJobsPerPage();
    window.addEventListener("resize", updateJobsPerPage);
    return () => window.removeEventListener("resize", updateJobsPerPage);
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };


  return (
    <main className="bg-purple-200">
      <div className="flex flex-col">
        <div className="bg-white">
          <NavBar />
        </div>
        
        <div className="relative lg:hidden mt-5 left-5">
          {/* Hidden filter option */}
          <BottomDrawer
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        </div>
        
        <div className="flex flex-row mx-2 mt-2 mb-2">
          {/* Sidebar Filter (Shown on Large Screens) */}
          <div className="hidden lg:block w-1/3 2xl:w-1/4 mx-auto xl:justify-items-center 2xl:mx-0 2xl:justify-end">
            <Filterdock
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>

          {/* Job Listings */}
          <div className="w-full lg:w-2/3 mx-1">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
              {paginatedJobs.map((job) => (
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 text-white rounded ${
                    currentPage === 1 ? "bg-gray-400" : "bg-purple-800 hover:bg-purple-900"
                  }`}
                >
                  Previous
                </button>
                <span className="text-gray-700 font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 text-white rounded ${
                    currentPage === totalPages ? "bg-gray-400" : "bg-purple-800 hover:bg-purple-900"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
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
