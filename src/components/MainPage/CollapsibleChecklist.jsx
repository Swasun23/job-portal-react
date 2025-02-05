import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const CollapsibleChecklist = ({ title = "Topic", items = [], selectedItems, setSelectedItems }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="w-64 border-t-1 border-gray-200 m-4">
      <button
        onClick={toggleCollapsible}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 "
      >
        <span className="font-medium">{title}</span>
        <div 
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4">
          {items.map((item) => (
            <label
              key={item.id}
              className="flex items-center space-x-3 mb-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedItems[item.id]}
                onChange={() => handleCheckboxChange(item.id)}
                className="h-4 w-4 rounded border-gray-300 accent-purple-800"
              />
              <span className="text-gray-700 font-light text-sm">{item.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

CollapsibleChecklist.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  selectedItems: PropTypes.object.isRequired,
  setSelectedItems: PropTypes.func.isRequired,  
};

export default CollapsibleChecklist;