import PropTypes from "prop-types";
import DscrpTabs from "./DscrpTabs";

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
    <div className="bg-white rounded shadow-lg xl:max-w-150">    
      <div className="flex flex-col p-4">
        <div className="flex flex-row justify-between">
          {" "}
          {/* First row for company logo,(role&widget),apply button */}
          <img src={companylogo} className=" h-10 md:h-12" />
          <div className="flex flex-col">
            {" "}
            {/* for the role and other color ticks*/}
            <h1 className="font-bold text-lg md:text-xl">{role}</h1>
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
                {
                  text: experience,
                  bg: "bg-green-200",
                  textColor: "text-green-700",
                },
                { text: nature, bg: "bg-red-200", textColor: "text-red-700" },
              ].map(({ text, bg, textColor }) => (
                <div
                  key={text}
                  className={`${bg} ${textColor} font-semibold m-1 p-1 text-center rounded-xl text-xs md:m-2 md:p-2 md:text-md group-hover:bg-purple-900 group-hover:text-white duration-200`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div>
            <button className="p-0.5 md:p-2 text-xs md:text-md font-semibold bg-purple-800 text-white rounded-lg">
              Apply now
            </button>
          </div>
        </div>
        <div> {/* For the tabs*/}
            <DscrpTabs jobdscrp={jobdscrp} jobreq={jobreq} />  
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
  jobreq :PropTypes.string.isRequired
};

export default JobInfoCard;
