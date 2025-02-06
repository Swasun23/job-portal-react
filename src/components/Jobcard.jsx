import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Jobcard = ({
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
    <div className="bg-white p-2 md:p-3 xl:p-6 rounded-lg shadow-md transition-transform duration-300 hover:bg-purple-700 hover:text-white group lg:max-w-90">
      <div className="flex flex-col justify-start content-between">
        <div className="flex flex-row justify-start space-x-4">
          <div>
            <img src={companylogo} className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-md lg:text-xl">{companyName}</h1>
            <p>{location}</p>
          </div>
        </div>
        <div className="text-md md:text-lg lg:text-xl font-bold">{role}</div>
        <div className="text-sm md:text-md xl:text-lg">{description}</div>
        <div className="flex flex-row flex-wrap">
        {[
              {
                text: `${positions} Positions`,
                bg: "bg-blue-200",
                textColor: "text-blue-700",
              },
              {
                text: jobtype,
                bg: "bg-orange-200",
                textColor: "text-orange-700",
              },
              { text: salary, bg: "bg-teal-200", textColor: "text-teal-700" },
              { text: experience, bg: "bg-green-200", textColor: "text-green-700"},
              { text: nature, bg: "bg-red-200", textColor: "text-red-700"},
            ].map(({ text, bg, textColor }) => (
              <div
                key={text}
                className={`${bg} ${textColor} font-semibold m-1 p-1 text-center rounded-lg text-xs md:m-2 md:p-2 md:text-md group-hover:bg-purple-900 group-hover:text-white duration-200` }
              >
                {text}
              </div>
            ))}
        </div>
        <div className="flex flex-row justify-start space-x-2 my-auto">
            <button className="p-2 font-semibold bg-purple-800 text-white rounded-lg">Apply now</button>
            <button className="p-2 font-semibold border rounded-lg" onClick={() => navigate("/jobs-info")}>View Details</button>
        </div>
      </div>
    </div>
  );
};

Jobcard.propTypes = {
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

export default Jobcard;
