import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import PageHeaders from "../../components/pageHeaders/PageHeaders";
import BlockDetails from "../../components/blockDetails/BlockDetails";
import Footer from "../../components/footer/Footer";

const Details = (props) => {
  const params = useParams().blockId;

  return (
    <div>
      <div className="all-blocks-page">
        <div className="page-header">
          <PageHeaders />
        </div>
        <div className="container page-title">
          <h4>Block #{params}</h4>
        </div>
        <div className="blocks-table container">
          <BlockDetails blockNumber={params} />
        </div>
        <div className="b-desc text-muted mt-3 container">
          <p>
            <span>
              {" "}
              <HiOutlineLightBulb size={19} />
            </span>
            Blocks are batches of transactions linked together via cryptographic
            hashes. Any tampering of a block would invalidate all following
            blocks as all subsequent hashes would change. Learn more about this
            page in our <Link to="#">Knowledge Base</Link>.
          </p>
        </div>
        <div className="b-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Details;
