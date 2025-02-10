import { useState } from "react";
import PropTypes from 'prop-types';
import parse from "html-react-parser";

const Tabsjob = ({ jobdscrp, jobreq }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", tabname: "Job Description" },
    { id: "tab2", tabname: "Job Requirement" }
  ];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <nav className="grid grid-cols-2 w-full gap-1 sm:gap-2 md:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-xs sm:text-sm md:text-base xl:text-lg px-2 py-2 sm:py-2.5 md:py-3 transition-all duration-100 ${
              activeTab === tab.id
                ? "border-b-2 border-purple-700 text-purple-700 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.tabname}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="mt-4 sm:mt-6 px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 text-sm sm:text-base xl:text-lg text-gray-700 leading-relaxed transition-transform duration-1000">
        {activeTab === "tab1" && (
          <div className="prose prose-sm sm:prose-base xl:prose-lg max-w-none">
            {parse(jobdscrp)}
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="prose prose-sm sm:prose-base xl:prose-lg max-w-none">
            {parse(jobreq)}
          </div>
        )}
      </div>
    </div>
  );
};

Tabsjob.propTypes = {
  jobdscrp: PropTypes.string.isRequired,
  jobreq: PropTypes.string.isRequired,
};

export default Tabsjob;
