import React from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";

const Transactions = () => {
  const [blocks] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
                <td>Txn Hash</td>
                <td>Method </td>
                <td>Block</td>
                <td className="age-th">Age</td>
                <td>From</td>
                <td>To</td>
                <td>Value</td>
                <td className="age-th">Txn Fee</td>
              </tr>
            </thead>
            <tbody>
              {blocks.map((block, index) => (
                <tr key={index}>
                  <td>
                    <Link to="/blocks/15664113">15664113</Link>
                  </td>
                  <td>3 secs ago</td>
                  <td className="txn-td">34</td>
                  <td>0</td>
                  <td>
                    {" "}
                    <Link to="#">Fee Recipient: 0x467...263</Link>
                  </td>
                  <td>
                    2,574,506 <span>(8.58%, -83%)</span>
                  </td>
                  <td>30,000,000</td>
                  <td>5.63 Gwei</td>
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

export default Transactions;
