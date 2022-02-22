/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact";
import React, { useState, useEffect } from "react";

function Nav() {
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState("");
  const [walletAddress, setWallet] = useState("");

  useEffect(() => {
    async function loadCurrentWalletConnected() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
      addWalletListener();
    }
    loadCurrentWalletConnected();
  }, []);

  const handleconnectWallet = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const addWalletListener = async () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://metamask.io/download.html`}
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  };
  return (
    <nav>
      <div className="logo_section m-negative">
        <a href="/">
        {/* <span className="logo_name">Classic Swaggos</span> */}
        <img alt="" src="img/logo.png" width={200} /></a>
      </div>
      <div className="nav_links_section">
        <div className="nav_links_middle">
          <a href="/#ABOUT" className="nav_link">
            ABOUT
          </a>
          <a href="/#COLLECTION" className="nav_link">
            COLLECTION
          </a>
          <a href="/#HELP&FAQ" className="nav_link">
            HELP &amp; FAQ
          </a>
          <a href="/#MINT" className="nav_link">
            MINT
          </a>
          <Link to="nfts" className="nav_link">
            ALL SWAGGOS
          </Link>
        </div>
        {walletAddress.length > 0 ? (
          // <a className="nav_link button_type" onClick={handleconnectWallet}>
          //   {String(walletAddress).substring(0, 6) +
          //     "..." +
          //     String(walletAddress).substring(38)}
          // </a>
          <Link to="wallet" className="nav_link button_type">
            MY WALLET
          </Link>
        ) : (
          <a className="nav_link button_type" onClick={handleconnectWallet}>
            CONNECT WALLET
          </a>
        )}
      </div>
      <div className="menu"></div>
    </nav>
  );
}

export default Nav;
