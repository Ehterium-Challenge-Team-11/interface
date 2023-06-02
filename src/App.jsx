import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './views/home';
import { ethers } from "ethers";

function App() {
  useEffect(() => {

    (async () => {
      // A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []);

      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      const signer = provider.getSigner()
    })()




    if (window.ethereum) {
      window.ethereum
        .request({
          method: 'eth_requestAccounts'
        })
        .then(console.log);
    } else {
      console.log("CLiente no tiene un provider");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
      </Routes>

    </>
  )
}

export default App;
