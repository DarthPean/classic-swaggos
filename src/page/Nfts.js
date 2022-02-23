/* eslint-disable no-unused-vars */
import NFTs from "../rank.json";
import React, { useState, useEffect, useContext } from "react";
import Card from "../component/Card";
import Pagination from "../component/Pagination";
import { filterOption } from '../constants/db';
import { GlobalContext } from "../context/Provider";
import updateFilter from '../context/actions/filter/updateFilter';
import deleteFilter from "../context/actions/filter/deleteFilter";

function Index() {
  const [List, setList] = useState(NFTs);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(50);
  const [currentPost, setCurrentPost] = useState([]);
  const { filterState, filterStateDispatch } = useContext(GlobalContext);
  let [indexOfFirstPost, setindexOfFirstPost] = useState(0);
  let [indexOfLastPost, setindexOfLastPost] = useState(50);

  const [isMoreFilter, setIsMoreFilter] = useState(false);


  useEffect(
    () => {
      console.log("+++++", filterState)
      const filteredNFTs = NFTs.filter(nft => {
        return (filterState.base === "null" || nft.attributes.base === filterState.base) &&
          (filterState.clothes === "null" || nft.attributes.clothes === filterState.clothes) &&
          (filterState.ears === "null" || nft.attributes.ears === filterState.ears) &&
          (filterState.hat === "null" || nft.attributes.hat === filterState.hat) &&
          (filterState.mouth === "null" || nft.attributes.mouth === filterState.mouth) &&
          (filterState.eyes === "null" || nft.attributes.eyes === filterState.eyes)
      })
      setList(filteredNFTs);
      setindexOfLastPost(currentPage * postsPerPage);
      setindexOfFirstPost(indexOfLastPost - postsPerPage);
      var currentPosts = filteredNFTs.slice(indexOfFirstPost, indexOfLastPost);
      setCurrentPost(currentPosts);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPage, filterState],
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

  const _onSelectFilterOption = (optionType, optionVal) => {
    console.log(optionType, optionVal)
    let payload = { ...filterState };
    optionType === 'BASE' ?
      payload = {
        ...payload,
        base: optionVal
      } : optionType === 'CLOTHES' ?
        payload = {
          ...payload,
          clothes: optionVal
        } : optionType === 'EARS' ?
          payload = {
            ...payload,
            ears: optionVal
          } : optionType === 'HAT' ?
            payload = {
              ...payload,
              hat: optionVal
            } : optionType === 'EYES' ?
              payload = {
                ...payload,
                eyes: optionVal
              } : payload = {
                ...payload,
                mouth: optionVal
              }

    updateFilter(payload)(filterStateDispatch);

  }

  const FilterOption = ({ option, selectedOption }) => {
    return (
      <div className="filter-option col-12 col-md-4 col-sm-6 my-2 my-md-4">
        <span className="section_text txt2">
          {option.name}
        </span>
        <div class="select">
          <select className="primary" onChange={(e) => { _onSelectFilterOption(option.name, e.target.value) }}>
            <option value="null">--Please select {option.name}--</option>
            {
              option.items.map(v => {
                return <option selected={selectedOption === v.value && "selected"} value={v.value}>{v.text}</option>
              })
            }
          </select>
        </div>
      </div>
    )
  }

  const _onToggleMoreLess = () => {
    if (isMoreFilter) {
      deleteFilter()(filterStateDispatch);
    }
    setIsMoreFilter(!isMoreFilter)
  }

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
        <span className="sort_item" onClick={() => HighestTokend()}>
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
          Most Rarity
        </span>
        <span className="sort_item" data-sort="d" onClick={() => HighRarity()}>
          Least Rarity
        </span>
      </div>
      <div className="filter-section mb-5">
        <div>
          <span className="btn primary" onClick={() => { _onToggleMoreLess() }}>
            {isMoreFilter ? 'Less' : 'More'}
          </span>
        </div>
        {
          isMoreFilter &&
          <div className="container">
            <div className={isMoreFilter ? "filter-option-con row show" : "filter-option-con row"}>
              <FilterOption selectedOption={filterState.base} option={filterOption.base} />
              <FilterOption selectedOption={filterState.clothes} option={filterOption.clothes} />
              <FilterOption selectedOption={filterState.ears} option={filterOption.ears} />
              <FilterOption selectedOption={filterState.hat} option={filterOption.hat} />
              <FilterOption selectedOption={filterState.mouth} option={filterOption.mouth} />
              <FilterOption selectedOption={filterState.eyes} option={filterOption.eyes} />
            </div>
          </div>
        }
      </div>



      <Card NFTsList={currentPost} currentPage={currentPage} />
      <Pagination
        // postsPerPage={postsPerPage}
        // totalPosts={List.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </section >
  );
}

export default Index;
