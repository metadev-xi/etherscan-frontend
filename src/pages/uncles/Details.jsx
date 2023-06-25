import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import PageHeaders from "../../components/pageHeaders/PageHeaders";
import UncleDetails from "../../components/uncleDetails/UncleDetails";
import Footer from "../../components/footer/Footer";

const UncleDetailsPage = (props) => {
  const params = useParams().hash;
  console.log(params);

  return (
    <div>
      <div className="all-blocks-page">
        <div className="page-header">
          <PageHeaders />
        </div>
        <div className="container page-title">
          <h4>Uncle #{params}</h4>
        </div>
        <div className="blocks-table container">
          <UncleDetails blockNumber={params} />
        </div>
        <div className="b-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UncleDetailsPage;
