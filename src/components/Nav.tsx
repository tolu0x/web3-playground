import { useState } from "react";
import { connectWallet } from "../utils/connectWallet"; 


const Nav: React.FC = () => {
  const [address, setAddress] = useState("");
  
  
  return (
    <header className="p-4 flex justify-between gap-6 md:gap-10">
      <a href="/" className="flex items-center space-x-2">
        <span className="text-2xl inline-block font-bold">Web3ooorr</span>
      </a>
      <nav className="flex gap-6">
        <a
          href="https://github.com/tolu0x/web3-playground"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium opacity-80 hover:opacity-100"
        >
          Github
        </a>
        <a
          href="https://twitter.com/tolufbg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium opacity-80 hover:opacity-100"
        >
          Twitter
        </a>
        {!address ? (
          <button
            role="button"
            onClick={async() => setAddress(await connectWallet())}
            className="flex items-center text-sm font-medium opacity-80 hover:opacity-100"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            role="button"
            className="flex items-center text-sm font-medium opacity-80 hover:opacity-100"
          >
            {address}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Nav;
