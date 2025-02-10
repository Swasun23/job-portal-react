import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Likeheart from "./Likeheart"; // Import the Likeheart component

const JobCard = ({
  id,
  companylogo,
  companyName,
  location,
  role,
  description,
  positions,
  jobtype,
  salary,
  experience,
  nature,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-3 sm:p-4 md:p-5 xl:p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-purple-700 hover:text-white group w-full max-w-xl h-full flex flex-col">
      <div className="flex flex-col h-full space-y-2 sm:space-y-3">
        {/* Company Info Section */}
        <div className="flex justify-between">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="flex-shrink-0">
              <img
                src={companylogo}
                alt={companyName}
                className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl truncate">
                {companyName}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-200">
                {location}
              </p>
            </div>
          </div>
          <div className="ml-auto">
            <Likeheart /> {/* Heart icon placed here */}
          </div>
        </div>

        {/* Role & Description */}
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold line-clamp-2">
            {role}
          </h2>
          <p className="text-xs sm:text-sm xl:text-base line-clamp-2 text-gray-800">
            {description}
          </p>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2">
          {[
            {
              text: `${positions} Positions`,
              bg: "bg-blue-100",
              textColor: "text-blue-700",
            },
            {
              text: jobtype,
              bg: "bg-orange-100",
              textColor: "text-orange-700",
            },
            {
              text: salary,
              bg: "bg-teal-100",
              textColor: "text-teal-700",
            },
            {
              text: experience,
              bg: "bg-green-100",
              textColor: "text-green-700",
            },
            {
              text: nature,
              bg: "bg-red-100",
              textColor: "text-red-700",
            },
          ].map(
            ({ text, bg, textColor }) =>
              text && (
                <div
                  key={text}
                  className={`${bg} ${textColor} font-lexend font-extrabold text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 
                  rounded-lg group-hover:bg-purple-900 group-hover:text-white transition-colors duration-200`}
                >
                  {text}
                </div>
              )
          )}
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4">
          <button
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold bg-purple-700 
              text-white rounded-lg hover:bg-purple-700 group-hover:bg-white group-hover:text-purple-700 
              transition-colors duration-200"
          >
            Apply now
          </button>
          <button
            onClick={() => navigate(`/jobs-info/${id}`)}
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold border rounded-lg 
              hover:bg-gray-50 group-hover:border-white group-hover:hover:bg-purple-700 
              transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  id: PropTypes.string.isRequired,
  companylogo: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  positions: PropTypes.string.isRequired,
  jobtype: PropTypes.string,
  salary: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  nature: PropTypes.string,
};

export default JobCard;
