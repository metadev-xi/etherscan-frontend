import { useState } from "react";
import "./LatestTxns.css";

const LatestTxns = () => {
  const [blocks] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  return (
    <div className="card">
      <div className="card-header">
        <h3>Latest Transactions</h3>
      </div>
      <div className="card-body">
        <div className="txns-wrapper">
          {blocks.map((_, index) => (
            <div key={index} className="single-block">
              <div className="block-number">
                <div className="tx">Tx</div>
                <div className="number-div">
                  <span className="number">
                    <a href="#">0xf418f495d...</a>
                  </span>
                  <div className="time">17 secs ago</div>
                </div>
              </div>
              <div className="recipient-div">
                <div className="recipient">
                  From{" "}
                  <span>
                    <a href="https://etherscan.io/address/0x4675c7e5baafbffbca748158becba61ef3b0a263">
                      0x5e26e2e8d4c89b032217...
                    </a>
                  </span>
                </div>
                <div className="txns-number">
                  To
                  <span className="txn-number">
                    <a href="#"> 0xc02aaa39b223fe8d0a...</a>
                  </span>
                </div>
              </div>
              <div className="reward">
                <span>33237 Eth</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <a href="#">View all blocks</a>
      </div>
    </div>
  );
};

export default LatestTxns;
