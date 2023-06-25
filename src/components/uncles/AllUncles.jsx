import "./AllUncles.css";
import { Link } from "react-router-dom";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";

const AllUncles = () => {
  const [blocks] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="container all-uncles">
      <div className="card">
        <div className="block-range">
          <p>
            Showing uncle (#15536877 to #15537380) out of 1,306,719 total uncles
          </p>
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
                <td>Block Height</td>
                <td>Uncle Number</td>
                <td className="age-th">Age</td>
                <td>Miner</td>
                <td>Reward</td>
              </tr>
            </thead>
            <tbody>
              {blocks.map((block, index) => (
                <tr key={index}>
                  <td>
                    <Link to="/blocks/15664113">15664113</Link>
                  </td>
                  <td>
                    <Link to="/uncle/12372332">15664113</Link>
                  </td>
                  <td>24 days 15 hrs ago</td>
                  <td>
                    {" "}
                    <Link to="#">Binance Pool</Link>
                  </td>
                  <td>1.75 Ether</td>
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

export default AllUncles;
