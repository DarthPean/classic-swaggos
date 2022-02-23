import { GlobalContext } from "../context/Provider";
import { useContext, useEffect, useState } from "react";
import NFTs from "../rank.json";

export default function useSelectedChat() {
  const { filterState } = useContext(GlobalContext);

  useEffect(() => {
    console.log("+++++", filterState)
    
  }, [filterState])
  
  return [];
}
