import "./BlockDetails.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Overview from "./overview/Overview";
import Concensus from "./concensus/Concensus";
import Comments from "./comments/Comments";

const BlockDetails = ({ blockNumber }) => {
  const handleChange = (index) => {
    console.log(index);
  };
  return (
    <div>
      <div className="card details-wrapper">
        <Tabs onSelect={(index) => handleChange(index)}>
          <TabList className="tab-list">
            <Tab>Overview</Tab>
            <Tab>Concensus Info</Tab>
            <Tab>Comments</Tab>
          </TabList>

          <TabPanel>
            <Overview blockNumber={blockNumber} />
          </TabPanel>
          <TabPanel>
            <Concensus />
          </TabPanel>
          <TabPanel>
            <Comments />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BlockDetails;
