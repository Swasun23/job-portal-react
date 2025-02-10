import PropTypes from 'prop-types'

const ProcessCard = ({ img, title, description }) => {
  return (
    <div className="shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-lg bg-white p-4 md:p-6 lg:p-8">
      <div className="flex flex-col justify-start text-sm sm:text-base md:text-lg xl:text-xl">
        {/* Responsive Image */}
        <img 
          className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain" 
          src={img} 
          alt={title}
        />
        {/* Title */}
        <h1 className="font-bold my-2 text-lg sm:text-xl md:text-2xl">{title}</h1>
        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">{description}</p>
      </div>
    </div>
  )
}

ProcessCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProcessCard;
