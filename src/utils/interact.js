import abi from "../abi.json";
import Web3 from "web3";
const { ethereum } = window;
const web3 = new Web3(ethereum);
const address = "0x00E14352b78f158762f10E8Af2c5a9F0253821a6";

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
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
        </span>
      ),
    };
  }
};

export const checkConnection = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  } else {
    return 1;
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      var netId = undefined;
      var promise = web3.eth.net.getNetworkType();
      await promise.then((result) => (netId = result));
      console.log(netId);

      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
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
        </span>
      ),
    };
  }
};

export const mintNFT = async (number, price) => {
  //error handling
  if (number === "") {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    };
  }

  const contract = new web3.eth.Contract(abi, address);
  const accounts = await web3.eth.getAccounts();

  let ETC_COST;
  if (price === 1) {
    ETC_COST = 1000000000000000000;
  } else {
    ETC_COST = 2000000000000000000;
  }

  let GAS_LIMIT = 285000;
  let totalCostWei = String(ETC_COST * number);
  let totalGasLimit = String(GAS_LIMIT * number);

  console.log(totalCostWei);

  try {
    await contract.methods
      .mint(number)
      .send({
        from: accounts[0],
        gasLimit: String(totalGasLimit),
        to: address,
        value: totalCostWei,
      })
      .then(function (result) {
        console.log(result);
      });
    return {
      success: true,
      status: "🙌 NFT Successfully Minted",
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};

export const totalSupply = async () => {
  const contract = new web3.eth.Contract(abi, address);
  // const accounts = await web3.eth.getAccounts();

  try {
    const supply = await contract.methods.totalSupply().call();
    return supply;
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};

export const getOwner = async (token) => {
  const contract = new web3.eth.Contract(abi, address);
  // const accounts = await web3.eth.getAccounts();

  try {
    const address = await contract.methods.ownerOf(token).call();
    return {
      success: true,
      address: address,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};

export const checkNetwork = async () => {
  web3.eth.net.getId().then((netId) => {
    console.log(netId);
  });
};
