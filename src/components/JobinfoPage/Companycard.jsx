import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const CompanyCard = ({ abtcmpny, n_emps, hq, reviews, benefits }) => {
  return (
    <div className="bg-white rounded-lg w-full h-full mx-auto">
      <div className="flex flex-col p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
        {/* About Section */}
        <div className="space-y-3">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
            About Company
          </h2>
          <div className="text-xs sm:text-sm md:text-base text-gray-700 prose prose-sm sm:prose-base max-w-none">
            {parse(abtcmpny)}
          </div>
        </div>

        {/* Company Stats */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <img src="/stock_icons/profile-icon.svg" alt="Employees" className="h-5 md:h-6 w-auto" />
            <span className="text-sm sm:text-base md:text-lg">{n_emps}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <img src="/stock_icons/location-icon.svg" alt="Location" className="h-5 md:h-6 w-auto" />
            <span className="text-sm sm:text-base md:text-lg">{hq}</span>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-2">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Reviews</h2>
          <div className="space-y-2">
            {reviews.map((review, index) => (
              <div key={index} className="flex items-start space-x-3 p-0.5 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <img src={review.isgood ? "/stock_icons/thumbsup-icon.png" : "/stock_icons/thumbsdown-icon.png"} className="h-5 md:h-6 w-auto mt-0.5" alt={review.isgood ? "Positive review" : "Negative review"} />
                <p className="text-sm sm:text-base md:text-lg text-gray-600 flex-1">{review.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-2">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Benefits and Perks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <img src={benefit.icon} alt={benefit.perk} className="h-6 sm:h-8 md:h-10 w-auto" />
                <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center">{benefit.perk}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

CompanyCard.propTypes = {
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

export default CompanyCard;
