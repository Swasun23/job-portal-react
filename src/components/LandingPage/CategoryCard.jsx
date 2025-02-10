import PropTypes from "prop-types";

const CategoryCard = ({ img, title, description,hoverEnabled }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-colors duration-300 hover:bg-purple-700 hover:text-white
      ${hoverEnabled ? 'hover:shadow-2xl hover:scale-105 hover:bg-purple-700 hover:text-white transition-transform duration-300' : ''}`}
    >
      <div className="text-left">
        <div className="text-2xl lg:text-3xl mb-4">{img}</div>
        <h3 className="text-lg lg:text-xl font-extrabold mb-2 break-words">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hoverEnabled: PropTypes.bool.isRequired,
};

export default CategoryCard;
