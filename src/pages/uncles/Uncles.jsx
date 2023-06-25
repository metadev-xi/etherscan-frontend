import "./Uncles.css";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import PageHeaders from "../../components/pageHeaders/PageHeaders";
import AllUncles from "../../components/uncles/AllUncles";
import Footer from "../../components/footer/Footer";

const Blocks = () => {
  return (
    <div className="all-blocks-page">
      <div className="page-header">
        <PageHeaders />
      </div>
      <div className="container u-page-title">
        <h4>Uncles</h4>
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
        <AllUncles />
      </div>
      <div className="b-desc text-muted mt-3 container">
        <p>
          <span>
            {" "}
            <HiOutlineLightBulb size={19} />
          </span>
          Uncle blocks are created when two or more miners create blocks at
          nearly the same time. Only one block can be mined and accepted as
          canonical on the blockchain. Learn more about this page in our{" "}
          <Link to="#">Knowledge Base</Link>.
        </p>
      </div>
      <div className="b-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Blocks;
