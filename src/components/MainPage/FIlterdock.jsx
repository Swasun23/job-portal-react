import CollapsibleChecklist from "./CollapsibleChecklist";
import PropTypes from "prop-types";

const Filterdock = ({ selectedItems, setSelectedItems }) => {
  const clearSelectedItems = () => {
    setSelectedItems((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, false]))
    );
  };

  return (
    <div className="max-w-80">
      <div className="flex flex-col rounded-2xl border-1 border-gray-200 shadow-2xs bg-white">
        <div className="flex flex-row justify-between items-center mt-3 mx-5">
          <div className="font-extrabold text-lg">All filters</div>
          <button
            className="border-1 border-purple-800 rounded-xl text-purple-800 font-bold font-sans-serif hover:bg-puple-800 hover:text-white hover:bg-purple-800 hover:cursor-pointer p-2 "
            onClick={clearSelectedItems}
          >
            Clear All
          </button>
        </div>
        <div>
          <CollapsibleChecklist
            title="Job Type"
            items={[
              { id: "jt-1", label: "Full-time" },
              { id: "jt-2", label: "Part-time" },
              { id: "jt-3", label: "Internship" },
              { id: "jt-4", label: "Contract" },
            ]}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          <CollapsibleChecklist
            title="Company-type"
            items={[
              { id: "ct-1", label: "Startup" },
              { id: "ct-2", label: "Foreign MNC" },
              { id: "ct-3", label: "Indian MNC" },
              { id: "ct-4", label: "Corporate" },
              { id: "ct-5", label: "Others" },
            ]}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          <CollapsibleChecklist
            title="Location"
            items={[
              { id: "l-1", label: "Delhi NCR" },
              { id: "l-2", label: "Bengaluru" },
              { id: "l-3", label: "Ahmedabad" },
              { id: "l-4", label: "Mumbai" },
              { id: "l-5", label: "Hyderabad" },
              { id: "l-6", label: "Chennai" },
              { id: "l-7", label: "Kolkata" },
            ]}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          <CollapsibleChecklist
            title="Industry"
            items={[
              { id: "idsty-1", label: "Automobile" },
              { id: "indsty-2", label: "Information Technology" },
              { id: "indsty-3", label: "Healthcare" },
              { id: "indsty-4", label: "Finance" },
              { id: "indsty-5", label: "Education" },
              { id: "indsty-6", label: "Retail" },
              { id: "indsty-7", label: "Manufacturing" },
            ]}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          <CollapsibleChecklist
            title="Salary"
            items={[
              { id: "slry-1", label: "1-3 Lakhs" },
              { id: "slry-2", label: "3-5 Lakhs" },
              { id: "slry-3", label: "5-7 Lakhs" },
              { id: "slry-4", label: "7-10 Lakhs" },
              { id: "slry-5", label: "10+ Lakhs" },
            ]}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
          <CollapsibleChecklist
            title="Experience"
            items={[
              { id: "Exp-1", label: "0-2 years" },
              { id: "Exp-2", label: "2-3 years" },
              { id: "Exp-3", label: "3-5 years" },
              { id: "Exp-4", label: "5-7 years" },
              { id: "Exp-5", label: "7+ years" },
            ]}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </div>
      </div>
    </div>
  );
};
Filterdock.propTypes = {
  selectedItems: PropTypes.object.isRequired,
  setSelectedItems: PropTypes.func.isRequired,
};

export default Filterdock;
