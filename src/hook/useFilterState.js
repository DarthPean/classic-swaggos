import { GlobalContext } from "../context/Provider";
import { useContext, useEffect, useState } from "react";

export default function useSelectedChat() {
  const { filterState } = useContext(GlobalContext);
  const [filterStateData, setFilterStateData] = useState(filterState)

  return [filterStateData];
}
