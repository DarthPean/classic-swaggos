/* eslint-disable no-unused-vars */
import NFTs from "../ranking.json";
import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import Pagination from "../component/Pagination";

function Index() {
  const [List, setList] = useState(NFTs);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(50);
  const [currentPost, setCurrentPost] = useState([]);
  let [indexOfFirstPost, setindexOfFirstPost] = useState(0);
  let [indexOfLastPost, setindexOfLastPost] = useState(50);

  useEffect(
    () => {
      setList(NFTs);
      setindexOfLastPost(currentPage * postsPerPage);
      setindexOfFirstPost(indexOfLastPost - postsPerPage);
      var currentPosts = List.slice(indexOfFirstPost, indexOfLastPost);
      console.log(currentPage);
      console.log(currentPosts);
      setCurrentPost(currentPosts);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPage],
    [currentPost]
  );

  // Get current NFTs

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const lowetTokend = () => {
    const list = List.sort((a, b) => b.ID - a.ID);
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPost(currentPosts);
    setCurrentPage(1);
  };

  const HighestTokend = () => {
    const list = List.sort((a, b) => a.ID - b.ID);
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPost(currentPosts);
    setCurrentPage(1);
  };

  const lowetRarity = () => {
    const list = List.sort((a, b) => a.Rarity - b.Rarity);
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPost(currentPosts);
    console.log(currentPost);
    setCurrentPage(1);
  };

  const HighRarity = () => {
    const list = List.sort((a, b) => b.Rarity - a.Rarity);
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPost(currentPosts);
    setCurrentPage(1);
  };

  const DefaultList = () => {
    var currentPosts = List.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPost(currentPosts);
    setCurrentPage(1);
  };

  return (
    <section className="no_side_space mp_up">
      <span className="section_title">Meet the Swaggos</span>
      <span className="section_text txt2">
        The price of each Classic Swaggo NFT card is 2 ETC, they are distributed
        on the Ethereum Classic network, and there is a total of 10,000 cards.
      </span>
      <br />
      <br />
      <br />
      <div className="sort">
        <span className="sort_item active" onClick={() => HighestTokend()}>
          All
        </span>
        <span className="sort_item" data-sort="a" onClick={() => lowetTokend()}>
          Lowest Token Id
        </span>
        <span
          className="sort_item"
          data-sort="b"
          onClick={() => HighestTokend()}
        >
          Highest Token Id
        </span>
        <span className="sort_item" data-sort="c" onClick={() => lowetRarity()}>
          Low Rarity
        </span>
        <span className="sort_item" data-sort="d" onClick={() => HighRarity()}>
          Top Rarity
        </span>
      </div>
      <Card NFTsList={currentPost} currentPage={currentPage} />
      <Pagination
        // postsPerPage={postsPerPage}
        // totalPosts={List.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </section>
  );
}

export default Index;
