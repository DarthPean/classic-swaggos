/* eslint-disable no-unused-vars */
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./page/Index";
import NFTs from "./page/Nfts";
import Wallet from "./page/Wallet";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="nfts" element={<NFTs />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
