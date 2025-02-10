import PropTypes from "prop-types";
import DscrpTabs from "./DscrpTabs";
import Tabsjob from "./Tabsjob";

const JobInfoCard = ({
  companylogo,
  role,
  positions,
  jobtype,
  salary,
  experience,
  nature,
  jobdscrp,
  jobreq,
}) => {
  return (
    <div className="bg-white rounded-lg  w-full mx-auto">
      <div className="flex flex-col p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-start sm:justify-between">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <img
              src={companylogo}
              alt="Company logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Role and Tags Section */}
          <div className="flex-grow flex flex-col space-y-2 sm:space-y-3 max-w-3xl">
            <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl xl:text-2xl text-gray-900">
              {role}
            </h1>

            <div className="flex flex-wrap gap-2">
              {[
                {
                  text: `${positions} Positions`,
                  bg: "bg-blue-100",
                  textColor: "text-blue-600",
                },
                {
                  text: jobtype,
                  bg: "bg-orange-100",
                  textColor: "text-orange-600",
                },
                {
                  text: salary,
                  bg: "bg-teal-100",
                  textColor: "text-teal-600",
                },
                {
                  text: experience,
                  bg: "bg-green-100",
                  textColor: "text-green-600",
                },
                {
                  text: nature,
                  bg: "bg-red-100",
                  textColor: "text-red-600",
                },
              ].map(({ text, bg, textColor }) => (
                <div
                  key={text}
                  className={`${bg} ${textColor} font-lexend font-bold text-xs sm:text-sm xl:text-sm
                    px-2 py-1 sm:px-2 sm:py-1.5 rounded-lg transition-colors duration-200`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex-shrink-0 sm:self-start">
            <button
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-2.5 
              text-sm sm:text-base font-semibold bg-purple-700 text-white rounded-lg
              hover:bg-purple-700 transition-colors duration-200 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Apply now
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-4 sm:mt-6">
          <Tabsjob jobdscrp={jobdscrp} jobreq={jobreq} />
        </div>
      </div>
    </div>
  );
};

JobInfoCard.propTypes = {
  companylogo: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  positions: PropTypes.string.isRequired,
  jobtype: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  jobdscrp: PropTypes.string.isRequired,
  jobreq: PropTypes.string.isRequired,
};

export default JobInfoCard;
