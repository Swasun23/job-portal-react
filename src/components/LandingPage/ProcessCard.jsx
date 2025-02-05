import PropTypes from 'prop-types'

const ProcessCard = ({img,title, description}) => {
  return (
    <div className="shadow-xl max-w-90 2xl:max-w-80 rounded-lg">
    <div className='flex flex-col justify-start p-4 text-sm 2xl:text-lg'>
        <img className="h-8 w-8 2xl:h-10 2xl:w-10 items-start"src={img}/>
        <h1 className='font-bold my-2'>{title}</h1>
        <div>{description}</div>
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