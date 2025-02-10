import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const DscrpTabs = ({ jobdscrp, jobreq }) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      {/* Tab Buttons */}
      <TabsList className="grid w-full grid-cols-2 h-auto p-1 sm:p-1.5 md:p-2">
        <TabsTrigger 
          value="description" 
          className="text-xs sm:text-sm md:text-base xl:text-lg px-2 py-2 sm:py-2.5 md:py-3
            data-[state=active]:font-semibold transition-all duration-200"
        >
          Job Description
        </TabsTrigger>
        <TabsTrigger 
          value="requirement"
          className="text-xs sm:text-sm md:text-base xl:text-lg px-2 py-2 sm:py-2.5 md:py-3
            data-[state=active]:font-semibold transition-all duration-200"
        >
          Job Requirement
        </TabsTrigger>
      </TabsList>

      {/* Tab Content */}
      <TabsContent 
        value="description" 
        className="mt-4 sm:mt-6 px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6
          text-sm sm:text-base xl:text-lg text-gray-700 leading-relaxed
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
          rounded-lg"
      >
        <div className="prose prose-sm sm:prose-base xl:prose-lg max-w-none">
          {parse(jobdscrp)}
        </div>
      </TabsContent>
      
      <TabsContent 
        value="requirement"
        className="mt-4 sm:mt-6 px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6
          text-sm sm:text-base xl:text-lg text-gray-700 leading-relaxed
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
          rounded-lg"
      >
        <div className="prose prose-sm sm:prose-base xl:prose-lg max-w-none">
          {parse(jobreq)}
        </div>
      </TabsContent>
    </Tabs>
  );
};

DscrpTabs.propTypes = {
  jobdscrp: PropTypes.string.isRequired,
  jobreq: PropTypes.string.isRequired
};

export default DscrpTabs;