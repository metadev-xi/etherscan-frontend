import "./AllBlocks.css";
import { Link } from "react-router-dom";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { all_blocks } from "../../redux/reducers/blocksReducers";
const { ethers } = require("ethers");

const AllBlocks = () => {
  const [loading, setLoading] = useState(false);

  const [blocks] = useSelector((state) => state.allBlocks.blocks);

  const dispatch = useDispatch();
  const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract

  useEffect(() => {
    dispatch(all_blocks(address), setLoading(true))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setLoading(false);
        }
        if (res.meta.requestStatus === "rejected") {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container all-blocks">
      <div className="card">
        <div className="block-range">
          <p>Block #15664290 to #15664299 (Total of 15,664,300 blocks)</p>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a href="#">First</a>
              </li>
              <li className="page-item">
                <a href="#">
                  <FaLessThan />
                </a>
              </li>
              <li className="page-item">Page 1 of 628119</li>
              <li className="page-item">
                <a href="#">
                  <FaGreaterThan />
                </a>
              </li>
              <li className="page-item">
                <a href="#">Last</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="card table-card">
          <table>
            <thead>
              <tr>
                <td>Block</td>
                <td className="age-th">Age</td>
                <td>Txn</td>
                <td>Uncles</td>
                <td>Free Receipient</td>
                <td>Gas Used</td>
                <td>Gas Limit</td>
                <td>Base Fee</td>
                <td>Reward</td>
                <td>Burnt Fees (ETH)</td>
              </tr>
            </thead>
            <tbody>
              {blocks?.map((block, index) => (
                <tr key={index}>
                  <td>
                    <Link to="/blocks/15664113">{block.blockNumber}</Link>
                  </td>
                  <td>3 secs ago</td>
                  <td className="txn-td">{block.transactionIndex}</td>
                  <td>0</td>
                  <td>
                    {" "}
                    <Link to="#">
                      Fee Recipient: {block.args.to.substring(0, 10)}
                    </Link>
                  </td>
                  <td>{parseInt(block.args.amount._hex, 16)}</td>
                  <td>30,000,000</td>
                  <td>5.63 Gwei</td>
                  <td>0.00378 Ether</td>
                  <td>
                    0.014501 <span>(-0.73%)</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="f-pagination">
          <div className="show-dropdown">
            <span className="show">Show</span>
            <span className="drpdwn">
              <select
                name="tablenumber"
                id="table-number"
                className="form-control"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </span>
            <span className="records">Records</span>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a href="#">First</a>
              </li>
              <li className="page-item">
                <a href="#">
                  <FaLessThan />
                </a>
              </li>
              <li className="page-item">Page 1 of 628119</li>
              <li className="page-item">
                <a href="#">
                  <FaGreaterThan />
                </a>
              </li>
              <li className="page-item">
                <a href="#">Last</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllBlocks;
