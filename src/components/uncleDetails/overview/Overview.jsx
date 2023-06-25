import "./Overview.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Overview = ({ blockNumber }) => {
  return (
    <div className="p-3">
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Uncle Heigth:
        </div>
        <div className="data-value b-number">{blockNumber}</div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Uncle Position:
        </div>
        <div className="data-value">
          <span className="status">0</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Block Height:
        </div>
        <div className="data-value">
          <span>15537381</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Hash:
        </div>
        <div className="data-value">
          <span>
            0xf4af15465ca81e65866c6e64cbc446b735a06fb2118dda69a7c21d4ab0b1e217
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Parent Hash:
        </div>
        <div className="data-value">
          <span className="txns">
            0xc0b9e5b8e24918ffabdf5ccaeaf1fcf4c0ff913fa0f1f2cefc2e3843808f70a8
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Sha3Uncles:
        </div>
        <div className="data-value">
          <span>
            0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Mined by:
        </div>
        <div className="data-value">
          <span>
            <a href="#">
              0xc365c3315cf926351ccaf13fa7d19c8c4058c8e1 (Binance Pool)
            </a>{" "}
            in 1 secs
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Difficulty:
        </div>
        <div className="data-value">
          <span>58,750,003,716,598,352,816,469</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Gas Limit:
        </div>
        <div className="data-value">
          <span>66,491 Wei</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Gas Used:
        </div>
        <div className="data-value">
          <span>66,491 Wei</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Timestamp:
        </div>
        <div className="data-value">
          <span> 26 days 5 hrs ago (9/15/2022 6:40:28 AM +UTC)</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Uncle Reward:
        </div>
        <div className="data-value">
          <span>1.75 Ether</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
