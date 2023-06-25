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
          Block Heigth:
        </div>
        <div className="data-value b-number">{blockNumber}</div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Status:
        </div>
        <div className="data-value">
          <span className="status">Finalized</span>
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
          <span>43 mins ago (Oct-08-2022 07:17:59 PM +UTC)</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Proposed On:
        </div>
        <div className="data-value">
          <span>
            Block proposed on slot <a href="#">4869388</a>, epoch{" "}
            <a href="#">152168</a>
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Transactions:
        </div>
        <div className="data-value">
          <span className="txns">
            <a href="#"> 251 transactions</a> and{" "}
            <a href="#">62 contract internal transactions</a> in this block
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Fee Recipient:
        </div>
        <div className="data-value">
          <span>
            <a href="#">0x4675c7e5baafbffbca748158becba61ef3b0a263</a> (Fee
            Recipient: 0x467...263) in 12 secs
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Block Reward:
        </div>
        <div className="data-value">
          <span>
            0.056525196551313231 Ether (0 + 1.71698957833450302 -
            1.660464381783189789)
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Total Difficulty:
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
          Size:
        </div>
        <div className="data-value">
          <span>66,491 bytes</span>
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
          <span>
            28,406,727 (94.69%){" "}
            <span className="gas-target text-success">+89% Gas Target</span>
          </span>
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
          <span>30,000,000</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Base Fee Per Gas:
        </div>
        <div className="data-value">
          <span>0.000000058453210107 Ether (58.453210107 Gwei)</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Burnt Fees:
        </div>
        <div className="data-value">
          <span>🔥 1.660464381783189789 Ether</span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Extra Data:
        </div>
        <div className="data-value">
          <span>0x (Hex:Null)</span>
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
            0x1deba8326ba2314a692b1f770f0882df88c31f44ac228d170f338167a3178f13
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
          <span>
            <a href="#">
              0x5201d196239c4039f4bbd37c6c01353330455f5f985c3210f831306de528ed18
            </a>
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          StateRoot:
        </div>
        <div className="data-value">
          <span>
            0x065bf681b7513127c5bb6c7b359382b8a912081cc98efe5ab76e82169f066193
          </span>
        </div>
      </div>
      <div className="data-row">
        <div className="data-title">
          <span className="text-muted">
            <AiOutlineQuestionCircle />
          </span>{" "}
          Nonce:
        </div>
        <div className="data-value">
          <span>0x0000000000000000</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
