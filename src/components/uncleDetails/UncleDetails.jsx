import "./UncleDetails.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Overview from "./overview/Overview";

const UncleDetails = ({ blockNumber }) => {
  const handleChange = (index) => {};
  return (
    <div>
      <div className="card details-wrapper">
        <Tabs onSelect={(index) => handleChange(index)}>
          <TabList className="tab-list">
            <Tab>Overview</Tab>
          </TabList>

          <TabPanel>
            <Overview blockNumber={blockNumber} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default UncleDetails;
