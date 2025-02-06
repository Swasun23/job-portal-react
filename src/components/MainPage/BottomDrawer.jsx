import { useState } from "react";
import filterData from "./filter_data";
import PropTypes from "prop-types";

export default function BottomDrawer({ selectedItems, setSelectedItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedfilter, setSelectedFilter] = useState("Job Type");
  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div>
      {/* Button to Open Drawer (Hides when Open) */}
      {!isOpen && (
        <button
          className="text-md text-white bg-purple-800 p-2 rounded"
          onClick={() => setIsOpen(true)}
        >
          Filter
        </button>
      )}

      {/* Drawer Overlay (Ensures Click to Close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30" // Slight overlay to indicate interaction
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Bottom Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg rounded-t-2xl transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ minHeight: "30vh" }} // Adjust height as needed
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-5 text-gray-600"
        >
          ✖
        </button>

        {/* Drawer Content */}
        <div className="flex flex-col">
          <h1 className="mb-2 border-b-2 border-b-gray-300">All Filters</h1>
          <div className="flex flex-row space-x-4 m-4">
            {/* Filter Selection Column */}
            <ul className="flex flex-col">
              {filterData.map((filter) => (
                <li
                  key={filter.title}
                  className={`${
                    selectedfilter === filter.title
                      ? "border-l-4 border-l-purple-800"
                      : "bg-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setSelectedFilter(filter.title)}
                    className="px-2 py-2 my-0.5 mr-6 text-left"
                  >
                    {filter.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* Filter Options */}
            <div>
              {filterData.map(
                (filter) =>
                  selectedfilter === filter.title && (
                    <div className="p-4" key={filter.title}>
                      {filter.items.map((item) => (
                        <label
                          key={item.id}
                          className="flex items-center space-x-3 mb-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedItems[item.id] || false}
                            onChange={() => handleCheckboxChange(item.id)}
                            className="h-4 w-4 rounded border-gray-300 accent-purple-800"
                          />
                          <span className="text-gray-700 font-light text-sm">
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BottomDrawer.propTypes = {
  selectedItems: PropTypes.object.isRequired,
  setSelectedItems: PropTypes.func.isRequired,
};
