import "./Homepage.css";
import Header from "../../components/header/Header";
import Showcase from "../../components/showcase/Showcase";
import DetailsBlock from "../../components/detailsBlock/DetailsBlock";
import LatestBlocks from "../../components/latestBlocks/LatestBlocks";
import LatestTxns from "../../components/latestTxns/LatestTxns";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Showcase />
      </div>
      <div>
        <DetailsBlock />
      </div>
      <div className="blocks-and-transactions container">
        <div className="latest-blocks">
          <LatestBlocks />
        </div>
        <div className="latest-transactions">
          <LatestTxns />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
