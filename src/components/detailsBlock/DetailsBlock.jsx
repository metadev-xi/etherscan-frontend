import "./DetailsBlock.css";
import { FaEthereum } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { TbWorldDownload } from "react-icons/tb";
import { GiMining } from "react-icons/gi";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const DetailsBlock = () => {
  return (
    <div className="container details-block-wrapper card">
      <div className="details-block">
        <div className="column-one">
          <div className="ether-price">
            <div className="icon">
              <FaEthereum size={30} />
            </div>
            <div className="data-info price">
              <h3>ETHER PRICE</h3>
              <a href="#">
                <span>$1,324.06</span>
                <span className="text-muted"> @ 0.06942 BTC</span>
                <span className="text-danger"> (-0.60%)</span>
              </a>
            </div>
          </div>
          <div className="market-cap">
            <div className="icon">
              <TbWorldDownload size={30} />
            </div>
            <div className="data-info">
              <h3>MARKET CAP</h3>
              <a href="#">
                <span>$159,324,065.00</span>
              </a>
            </div>
          </div>
        </div>
        <div className="column-two">
          <div className="transactions">
            <div className="icon">
              {" "}
              <RiPagesLine size={30} />
            </div>
            <div className="data-info fb-data">
              <div className="trans-div">
                <h3>TRANSACTIONS</h3>
                <a href="#">
                  <span>1,722.90 M</span>
                  <span className="text-muted"> (12.1 TPS)</span>
                </a>
              </div>
              <div className="gas-price">
                <h3>MED GAS PRICE</h3>
                <div>
                  <span>6 Gwei</span>
                  <span className="text-muted"> ($0.17)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="finalized-block">
            <div className="icon">
              <GiMining size={30} />
            </div>
            <div className="data-info fb-data">
              <div>
                <h3>LATEST FINALIZED BLOCK</h3>
                <span>15610342</span>
              </div>
              <div>
                <h3>MED GAS PRICE</h3>
                <span>15610374</span>
              </div>
            </div>
          </div>
        </div>
        <div className="column-three">
          <div className="graph">
            <div className="data-info">
              <h3>ETHEREUM TRANSACTION HISTORY IN 14 DAYS</h3>
              <div className="graph-figure p-1">
                <span>
                  <Line
                    style={{ width: "100%" }}
                    datasetIdKey="id"
                    options={{ maintainAspectRatio: false }}
                    data={{
                      labels: ["Jun", "Jul", "Aug"],
                      datasets: [
                        {
                          id: 1,
                          label: "",
                          data: [5, 6, 7],
                        },
                        {
                          id: 2,
                          label: "",
                          data: [3, 2, 1],
                        },
                      ],
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;
