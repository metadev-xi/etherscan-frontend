import "./LatestBlocks.css";
import { useState } from "react";

const LatestBlocks = () => {
  const [blocks] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  return (
    <div className="card">
      <div className="card-header">
        <h3>Latest Blocks</h3>
      </div>
      <div className="card-body">
        <div className="txns-wrapper">
          {blocks.map((_, index) => (
            <div key={index} className="single-block">
              <div className="block-number">
                <div className="bk">Bk</div>
                <div className="number-div">
                  <span className="number">
                    <a href="#">15160049</a>
                  </span>
                  <div className="time">17 secs ago</div>
                </div>
              </div>
              <div className="recipient-div">
                <div className="recipient">
                  Free Recipient{" "}
                  <span>
                    <a href="https://etherscan.io/address/0x4675c7e5baafbffbca748158becba61ef3b0a263">
                      Fee Recipient: 0x467...263
                    </a>
                  </span>
                </div>
                <div className="txns-number">
                  <span className="txn-number">
                    <a href="#">206 txns</a>
                  </span>
                  <span className="time"> in 12 secs</span>
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

export default LatestBlocks;
