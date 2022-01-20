/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Header from "../component/Header";
import Mint from "../component/Mint";
import About from "../component/About";
import Traits from "../component/Traits";
import Collection from "../component/Collection";
import Roadmap from "../component/Roadmap";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";

import {
  checkConnection,
  getCurrentWalletConnected,
  mintNFT,
  totalSupply,
  checkNetwork,
} from "../utils/interact";

function App() {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(2);
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [supply, setSupply] = useState(0);

  const wishList = [
    "0x6F2752bCF04aD3Bd569F8523C146701088dB8b2A",
    "0x4FFC3884669E442e5d2F687B2C70504D942ba129",
    "0xEaEA403F57CF1d143258AA5f30c53c313dB0bb14",
    "0x6C1bB12D45851E34e63D3aEc1367702A2A01eF9e",
    "0x620087aa7d016dA502Bed5841B71aee3C4887AC6",
    "0x7b731D3E1B4C6D71925833876af25fdD5C618191",
    "0x6B58bC920199eEfc3048A02d113627e6e0226f50",
    "0xdC6B8d16a7Bc3b95294d71b42f288B4fe14181Da",
    "0x24A85F7af097F169Cfa8CB101D6Dd6dfcA96cab5",
    "0xecbE76EB784a1EC0AEb49C2619d0C7b3661B88a4",
    "0x39aFB4f454ebe121A1b52040916fb5164E5A6f10",
    "0x0544C10cf254EedE9711b9Fb6CC803Ff3C3Bb628",
    "0x0fF9B6AB6Ec58ceB6D5ae8a1690dd5a0959aD002",
    "0x721C7ffFe9aC426A028e616677811F755Fa99EbA",
    "0x5aD7c70aC635B38d1Ff1ebd5320374d6182444b0",
    "0x391985Fdf0F28De092027D52763621221684caDf",
    "0xD0F7f1339F9dA7c16e2f2cEe89eE37f0C0b51d81",
    "0xa257cb0eF9E4Ab08Fb75181ee2E47919E5a2C98e",
    "0x57d0DD7dD9f8D79F6297D6aac15d07dA5f12b658",
    "0xD27eee122D0Af4Adae24c589b0916063fA0ED26a",
    "0x4dff8A3B9330942B0883E78741705789785a47ae",
    "0x8Ee316524EE3b51438240e8cA99c4af365Bda6B8",
    "0xdd8842eCA6Cd5316FDB8F75A0e7ea756db01c9c7",
    "0x2dF5A97C2AcE6e2dB08CEA422228B3E480eEbb86",
    "0x398Dd3E71D4D5c9e6D2aFD0668a99D4A7B74b90e",
    "0xA2E8B5226d5Fc9c0fF1d653F8132e4Dd88019465",
    "0x386D63939cdd398454961C1fF03012000fCb6b7d",
    "0xe211c9CF20364021980Fff5De4E21667548B65a1",
    "0xAc90fFD3434Db769AeB94e907879a5F3ABE93474",
    "0xf8f9042A6359065A2d279B280580478fC2934aBe",
    "0x358AF75741F75140FAEDdE986e5d21b11724Bd42",
    "0x0F207cdeF573a0b7aeC7b851D71E178a745b9cd4",
    "0xc24f91D4CB45c3D0Df8965aBC26B2d8c1FdC367e",
    "0xd5152B333706145a1FeA244c39aE010a297D9d27",
    "0x0a37bBc41356B97eeE9CA6EC51Cd142D29A90919",
    "0x1F891D94980C021b369E2BB4Ac3a782E5f6877B7",
    "0x07AD76F4049210722f12c996e86169Da55f3B681",
    "0x2Ac23EFc6e747CA1a1e01bad721Dd9Ba3676f66d",
    "0xB271cf0e246541fbB2ACC847bAccc2ab8edbF5EB",
    "0xa038c03fFC4Aa4a55A961060CffED8665dC01BC3",
    "0xc8B8c11a61fAaf2e159F20dE4cab91c8fbeb759a",
    "0x9ff18dc645D519B90021F704df134844195d76f6",
    "0xfb3156C2EeA76EbC44e9C292605527be3D7Aad87",
    "0xF3AFb97f628913dB171C140c208E552cb968B1C2",
    "0xc24f91D4CB45c3D0Df8965aBC26B2d8c1FdC367e",
    "0xdf156DAE212d744C54d1Cd9Ae8E3c1C34A1Ba34B",
    "0x33D36657a9659f242cC21fBa66DeC499A599475c",
    "0xa3C2651881d2081831d534F1E87593f7e926bd6a",
    "0xeC208f275C1EF5D4c19927B5d8D7e9e6001575B5",
    "0xd65a09670aE3eBF98bd5B75A1f6533065f12Fb5C",
    "0xD8cf3e31820ceEC940C69f462FC047d306BcB984",
    "0x07AD76F4049210722f12c996e86169Da55f3B681",
    "0xc8B8c11a61fAaf2e159F20dE4cab91c8fbeb759a",
    "0x9ff18dc645D519B90021F704df134844195d76f6",
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
    addWalletListener();
  }, []);

  totalSupply().then((data) => {
    setSupply(data);
  });

  // setTimeout(() => {
  //   checkConnection();
  // }, 2000);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);

          if (wishList.includes(accounts[0]) === true) {
            setPrice(1);
          }
          setStatus("how many? ☝️");
        } else {
          setWallet("");
          setStatus("Connect to Metamask 👇");
        }
      });
    } else {
      setStatus(
        // eslint-disable-next-line react/jsx-no-target-blank
        <a target="_blank" href={`https://metamask.io/download.html`}>
          Metamask required
        </a>
      );
    }
  }

  // Only " + (625 - supply) + " remaining!
  const mint = async () => {
    if (walletAddress !== "") {
      if (amount === 0) {
        setStatus("Enter Valid amount.");
      } else {
        setLoading(true);
        setStatus("Mint is in Progess. Please Wait.....");
        const { status } = await mintNFT(amount, price);
        if (status === "🙌 NFT Successfully Minted") {
          setSupply(parseInt(supply) + parseInt(amount));
        }
        setStatus(status);
        setLoading(false);
      }
    } else {
      setStatus("🦊 Connect to Metamask");
    }
  };

  return (
    <div>
      <Header />
      <Mint
        status={status}
        price={price}
        amount={amount}
        setAmount={setAmount}
        mint={mint}
        loading={loading}
        supply={supply}
      />
      <About />
      <Traits />
      <Collection />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
