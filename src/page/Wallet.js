/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import NFTs from "../ranking.json";
import React, { useState, useEffect } from "react";

import { walletOfOwner } from "../utils/interact";

function Index() {
  const [List, setList] = useState(NFTs);
  const [token, setToken] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const token = await walletOfOwner();
    setToken(token);
  }, []);

  function arrayObjectIndexOf(myArray, property, searchTerm) {
    for (var i = 0, len = myArray.length; i < len; i++) {
      if (myArray[i][property] === parseInt(searchTerm)) {
        return (
          <div className="swaggo" data-sort="a" key={i}>
            <a href={`https://blockscout.com/etc/mainnet/token/0x578fea35147ab2a4a821df70332d81f68d2b1691/instance/${searchTerm}/token-transfers`} target="_blank">
            <img
              src={`https://ipfs.io/ipfs/QmRNJJbYRabSHYxBpR5bwXC52DDwd9Bs5pCnnLTgaj9AJG/${searchTerm}.png`} alt=""
            /></a>
            <p className="swaggo_name">
              Classic Swaggo Rank #{myArray[i]["Rarity"]}
            </p>
            <p className="swaggo_rank">Token ID #{searchTerm}</p>
            <p className="swaggo_owner"></p>
          </div>
        );
      }
    }
    return null;
  }

  return (
    <section className="no_side_space mp_up">
      <span className="section_title">My Swaggos Wallet</span>
      <div className="swaggos_collection mt-30">
        {Array.isArray(token) === true ? (
          token.map((item, i) => {
            return arrayObjectIndexOf(NFTs, "ID", item);
          })
        ) : (
          <div className="center">
            <h5>No NFT in your wallet</h5>
          </div>
        )}
      </div>
    </section>
  );
}

export default Index;
