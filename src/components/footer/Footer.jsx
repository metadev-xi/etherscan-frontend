import "./Footer.css";
import { BsFillMoonFill } from "react-icons/bs";
import {
  AiTwotoneSetting,
  AiFillHeart,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillRedditCircle,
  AiFillMediumCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-top container">
        <div className="footer-about">
          <div className="logo-and-header">
            <h3>Powered by Ethereum</h3>
          </div>
          <p>
            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </p>
          <div className="pref-setting">
            <a href="#">
              <AiTwotoneSetting /> Preferences
            </a>
            <button>
              <BsFillMoonFill />
            </button>
          </div>
        </div>
        <div className="important-links">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">contact Us</a>
            </li>
            <li>
              <a href="#">Brand Assets</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Bug Bounty</a>
            </li>
          </ul>
        </div>
        <div className="important-links">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">APi Documentation</a>
            </li>
            <li>
              <a href="#">Knowledge Base</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Network Status</a>
            </li>
            <li>
              <a href="#">Disqus Comments</a>
            </li>
          </ul>
        </div>
        <div className="important-links">
          <h4>Products & Services</h4>
          <ul>
            <li>
              <a href="#">Advertise</a>
            </li>
            <li>
              <a href="#">Explorer-as-a-Service (EaaS)</a>
            </li>
            <li>
              <a href="#">Developer APIs</a>
            </li>
            <li>
              <a href="#">Blockscan</a>
            </li>
            <li>
              <a href="#">BeaconScan</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="bottom">
          <div className="copy-right">
            <p>Etherscan &copy; 2022 (C1)</p>
            <a href="https://etherscan.io/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f">
              Donate{" "}
              <span>
                <AiFillHeart />
              </span>
            </a>
          </div>
          <div className="socials">
            <a href="https://twitter.com/etherscan">
              <AiOutlineTwitter />
            </a>
            <a href="https://www.facebook.com/etherscan/">
              <AiFillFacebook />
            </a>
            <a href="https://www.reddit.com/r/etherscan/">
              <AiFillRedditCircle />
            </a>
            <a href="https://medium.com/etherscan-blog">
              <AiFillMediumCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
