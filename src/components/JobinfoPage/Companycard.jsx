import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";


const Companycard = ({ abtcmpny, n_emps, hq, reviews, benefits }) => {
  return (
    <>
      <div className="flex flex-col justify-start p-4 space-y-2">
        {" "}
        {/*main div*/}
        <h1 className="text-sm md:text-md xl:text-lg font-bold">About Company</h1>
        <p className="text-xs md:text-md xl:text-lg text-gray-700">{parse(abtcmpny)}</p>
        <div className="flex flex-row flex-wrap justify-between">
          {" "}
          {/* n employees and location*/}
          <div className="flex flex-row justify-center items-center">
            {" "}
            {/*n employees*/}
            |<img src="/stock_icons/profile-icon.svg" className="h-4 xl:h-6" />
            <p className="text-sm xl:text-md text-gray-700">{n_emps}</p>
          </div>
          <div className="flex flex-row justify-center">
            {" "}
            {/*hq*/}
            |<img src="/stock_icons/location-icon.svg" className="h-4 xl:h-6" />
            <p className="text-sm xl:text-md text-gray-700">{hq}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
            <p className="font-extrabold">Review</p>
            {reviews.map((review, index) => (
                            <div key={index} className="flex flex-row items-center mt-2">
                                <img
                                    src={review.isgood ? "/stock_icons/thumbsup-icon.png" : "/stock_icons/thumbsdown-icon.png"}
                                    className="h-6 mr-2"
                                    alt={review.isgood ? "Thumbs Up" : "Thumbs Down"}
                                />
                                <p className="text-sm xl:text-md font-extralight">{review.review}</p>
                            </div>
            ))}
        </div>
        <div className="flex flex-col justify-start">
            <h1 className="font-bold">Benefits and Perks</h1>
            <div className="flex flex-row justify-between">
                {benefits.map((benefit,index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={benefit.icon} className="h-6"/>
                        <p className="text-gray-700 text-sm xl:text-md">{benefit.perk}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

Companycard.propTypes = {
  abtcmpny: PropTypes.string.isRequired,
  n_emps: PropTypes.string.isRequired,
  hq: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      review: PropTypes.string.isRequired,
      isgood: PropTypes.bool.isRequired,
    })
  ).isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      perk: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Companycard;
