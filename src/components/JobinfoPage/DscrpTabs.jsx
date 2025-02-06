import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const DscrpTabs = ({ jobdscrp, jobreq }) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      {/* Tab Buttons */}
      <TabsList className="grid grid-cols-2 w-full">
        <TabsTrigger className="text-xs md:text-md xl:text-lg " value="description">Job Description</TabsTrigger>
        <TabsTrigger className="text-xs md:text-md xl:text-lg" value="requirement">Job Requirement</TabsTrigger>
      </TabsList>

      {/* Tab Content */}
      <TabsContent value="description" className="text-xs md:text-md xl:text-lg p-4 text-gray-700">
        {parse(jobdscrp)}
      </TabsContent>
      <TabsContent  value="requirement" className="text-xs md:text-md xl:text-lg p-4 text-gray-700">
        {parse(jobreq)}
      </TabsContent>
    </Tabs>
  );
};

DscrpTabs.propTypes = {
  jobdscrp: PropTypes.string.isRequired,
  jobreq: PropTypes.string.isRequired
};

export default DscrpTabs;
