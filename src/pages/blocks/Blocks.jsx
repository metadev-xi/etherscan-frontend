import "./Blocks.css";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import PageHeaders from "../../components/pageHeaders/PageHeaders";
import AllBlocks from "../../components/allBlocks/AllBlocks";
import Footer from "../../components/footer/Footer";

const Blocks = () => {
  return (
    <div className="all-blocks-page">
      <div className="page-header">
        <PageHeaders />
      </div>
      <div className="container page-title">
        <h4>Blocks</h4>
        <div className="burnt-fees">
          <span className="network-u">Network Utilization: 47.7%</span>
          <span className="b-fees">
            <span className="fire">🔥</span> Burnt Fees: 2,648,271.89 ETH{" "}
            <span className="dashboard-span">
              <span>
                <BsGraphUp />
              </span>
              <a href="#">Dashboard</a>
            </span>
          </span>
        </div>
        <hr />
        <p>
          <span className="featured">Featured: Etherscan API</span> - Need
          higher call rates ?{" "}
          <span className="sign-up-today">
            <Link to="#">Sign-up for a dedicated plan today!</Link>
          </span>
        </p>
      </div>
      <div className="blocks-table">
        <AllBlocks />
      </div>
      <div className="b-desc text-muted mt-3 container">
        <p>
          <span>
            {" "}
            <HiOutlineLightBulb size={19} />
          </span>
          Blocks are batches of transactions linked together via cryptographic
          hashes. Any tampering of a block would invalidate all following blocks
          as all subsequent hashes would change. Learn more about this page in
          our <Link to="#">Knowledge Base</Link>.
        </p>
      </div>
      <div className="b-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Blocks;
