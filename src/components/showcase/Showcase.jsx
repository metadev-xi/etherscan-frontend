import React from "react";
import "./Showcase.css";
import { FaSearch } from "react-icons/fa";

const Showcase = () => {
  return (
    <div className="showcase-wrapper">
      <div className="container ">
        <div className="filter">
          <h4>The Ethereum Blockchain Explorer</h4>
          <div className="filter-form">
            <div class="input-group mb-2">
              <select id="inputState" className="rounded-left">
                <option value="all" selected>
                  All Filters
                </option>
                <option value="adresses">Addresses</option>
                <option value="tokens">Tokens</option>
                <option value="tags">Name Tags</option>
                <option value="labels">Labels</option>
                <option value="website">Website</option>
              </select>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Search by Address / Txn Hash / Block / Token"
              />
              <div className="input-group-prepend">
                <button className="input-group-text search-btn">
                  <FaSearch size={10} />
                </button>
              </div>
            </div>
          </div>

          <p className="p-text">
            <span>Featured: </span>Build precise & Reliable Apps wih{" "}
            <span>FTMscan APIs</span>. <a href="#">Learn More!</a>
          </p>
        </div>
        <div className="ads">
          <a href="https://goto.etherscan.com/rd/S9EIHWMENTEQB94NM5APUAQ5C">
            <img
              src="https://etherscan.io/images/gen/aax_057-059_321x101.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
