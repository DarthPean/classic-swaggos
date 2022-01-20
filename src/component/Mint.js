/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { totalSupply } from "../utils/interact";
function Mint(props) {
  const [supply, setSupply] = useState(0);

  totalSupply().then((data) => {
    setSupply(data);
  });

  const RoundUp = (amount) => {
    props.setAmount(amount);
  };

  const Subtract = () => {
    if (props.amount > 1) {
      props.setAmount(parseInt(props.amount) - 1);
    }
  };

  const Add = () => {
    if (props.amount < 20) {
      props.setAmount(parseInt(props.amount) + 1);
    }
  };

  const handleChange = (event) => {
    props.setAmount(event.target.value);
  };

  return (
    <section className="colored" id="MINT">
      <img src="img/mint_left.svg" alt="" className="mint_left" />
      <img src="img/mint_right.svg" alt="" className="mint_right" />
      <span className="section_title">Mint Classic Swaggos</span>
      {isNaN(supply) === false ? (
        <span className="section_text">
          Total Minted:
          <span className="section_text_focus"> {supply} of 10,000</span>
        </span>
      ) : (
        <span>0</span>
      )}

      <span className="section_text yellow_text">
        {props.price} ETC + Gas fee <br /> Max 20 Swaggos per transaction
      </span>
      <div className="calc_section">
        <a className="nav_link button_type auto_button">
          <span className="plus_minus" onClick={Subtract}>
            -
          </span>{" "}
          &nbsp;&nbsp;&nbsp;
          {/* <span contenteditable="true">{props.amount}</span>&nbsp;&nbsp;&nbsp; */}
          <input value={props.amount} type="number" onChange={handleChange} />
          &nbsp;&nbsp;&nbsp;
          <span className="plus_minus" onClick={Add}>
            +
          </span>
        </a>
        <a
          className="nav_link button_type equal_button"
          onClick={() => RoundUp(5)}
        >
          5
        </a>
        <a
          className="nav_link button_type equal_button"
          onClick={() => RoundUp(10)}
        >
          10
        </a>
        <a
          className="nav_link button_type equal_button"
          onClick={() => RoundUp(20)}
        >
          20
        </a>
      </div>
      <span className="stauts">{props.status}</span>
      <br />
      <br />
      <a
        onClick={props.mint}
        className="nav_link button_type free_button alternate"
      >
        {props.loading === true ? <span>Loading.....</span> : <span>Mint</span>}
      </a>
      <br />
      <br />
      <span className="warning">
        Please Make Sure you are on ETC Network to avoid lost of funds
      </span>
      <br />
      {/* <span className="underscore">View Contract</span> */}
      <br />
      <span className="section_text smaller">
        Please use Chrome/Firefox with metamask extension for PC or metamask app
        for mobile
      </span>
    </section>
  );
}

export default Mint;
